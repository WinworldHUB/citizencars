import DefaultLayout from '../layouts/DefaultLayout';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Pagination } from 'swiper';
import { useParams } from 'react-router-dom';
import HeadingWithBorder from '../components/HeadingWithBorder';
import ReactPlayer from 'react-player';
import IconTile from '../components/IconTile';
import ImageCard from '../components/ImageCard';
import { useEffect, useState } from 'react';
import DBService from '../DBService';
import numeral from 'numeral';
import Icons from '../Icons';
import {
  CAR_COMFORT,
  CAR_ENGINE_AND_TRANSMISSION,
  CAR_INTERIOR,
  CAR_EXTERIOR,
  CAR_KEY_FEATURES,
  CAR_KEY_SPECIFICATIONS,
  CAR_OVERVIEW,
  CAR_SAFETY,
  CAR_COMMUNICATION,
} from '../constants';
import CarSpecifications from '../components/CarSpecifications';
import { useContext } from 'react';
import { LocalDataContext } from '../App';

const teamMembers = [
  {
    pic: '/assets/img/collection/honda_cr_v_usa_version_2016-3840x2160.jpg',
    title: '2022 BMW X7 XDRIVER30D DPE SIGNATURE',
    subTitle: 'REG.YEAR - 2021 | KMS - 25000 | FUEL TYPE - Diesel',
  },
  {
    pic: '/assets/img/collection/2012_audi_s5-1680x1050.jpg',
    title: 'Audi Q8 XDRIVER30D DPE SIGNATURE',
    subTitle: 'REG.YEAR - 2021 | KMS - 25000 | FUEL TYPE - Diesel',
  },
  {
    pic: '/assets/img/collection/295-2950134_toyota-innova-x-my-spec-toyota-innova-2019.jpg',
    title: 'JAGUAR XDRIVER30D DPE SIGNATURE 1',
    subTitle: 'REG.YEAR - 2021 | KMS - 25000 | FUEL TYPE - Diesel',
  },
  {
    pic: '/assets/img/collection/honda_cr_v_usa_version_2016-3840x2160.jpg',
    title: '2022 BMW X7 XDRIVER30D DPE SIGNATURE',
    subTitle: 'REG.YEAR - 2021 | KMS - 25000 | FUEL TYPE - Diesel',
  },
  {
    pic: '/assets/img/collection/2012_audi_s5-1680x1050.jpg',
    title: 'Audi Q8 XDRIVER30D DPE SIGNATURE',
    subTitle: 'REG.YEAR - 2021 | KMS - 25000 | FUEL TYPE - Diesel',
  },
  {
    pic: '/assets/img/collection/295-2950134_toyota-innova-x-my-spec-toyota-innova-2019.jpg',
    title: 'JAGUAR XDRIVER30D DPE SIGNATURE 1',
    subTitle: 'REG.YEAR - 2021 | KMS - 25000 | FUEL TYPE - Diesel',
  },
];

const CarDetail = (props) => {
  const { index } = useParams();
  const [inProgressMessage, setInProgressMessage] = useState('');
  const [car, setCar] = useState(null);
  const { userId } = useContext(LocalDataContext);

  useEffect(() => {
    setInProgressMessage('Loading car details ...');
    DBService.getCar(
      index,
      (response) => {
        setCar(response);
        setInProgressMessage('');
      },
      (err) => {
        console.log(err.message ?? err);
        setInProgressMessage(err.message ?? err);
      }
    );
  }, []);

  const addCarToWishList = () => {
    setInProgressMessage('Adding car to wishlist ...');
    DBService.addToWishList(
      userId,
      index,
      (response) => {
        console.log(response);
        setInProgressMessage('');
      },
      (err) => {
        console.log(err.message ?? err);
        setInProgressMessage(err.message ?? err);
      }
    );
  };

  if (inProgressMessage !== '' || car === null) {
    return (
      <DefaultLayout>
        <div className="featured-car content-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <img src="/assets/img/loader.gif" alt="Working ..." />
              </div>
              <div className="col-md-12">{inProgressMessage}</div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <div className="bg-light">
        <div className="container py-5">
          <HeadingWithBorder title={car.Brand}>
            <i className="fa-solid fa-indian-rupee-sign"></i>
            {` ${numeral(car['Price']).format('$ 0,0.00')} EMI STARTS WITH @ `}
            <i className="fa-solid fa-indian-rupee-sign"></i>
            {` ${car.emi ?? 0}`}
          </HeadingWithBorder>

          <div className="py-3">
            <Swiper
              autoHeight={true}
              modules={[Navigation, Scrollbar, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              navigation={true}
              pagination={{
                dynamicBullets: true,
              }}
              loop={true}
            >
              {Array.from(car?.Pics?.split('\n') ?? []).map((pic, pIndex) => (
                <SwiperSlide key={pIndex}>
                  <img
                    className="slide-photo"
                    src={`/assets/img/cars/${pic}`}
                    alt="car"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="d-flex justify-space-between py-5 w-100">
            <h1>Description</h1>
            <div className="w-100 p-2">
              <hr
                className="border border-primary w-100"
                style={{ height: '2px' }}
              />
            </div>
          </div>
          <p className="text-justify">{car.Description ?? ''}</p>
          <div className="text-end">
            <button
              className="btn btn-primary rounded"
              onClick={addCarToWishList}
            >
              Reserve this car
            </button>
          </div>
        </div>
      </div>
      <div className="container py-5">
        {/* <HeadingWithBorder title="Specifications" /> */}
        <div className="accordion-container">
          <h3 className="accordion-button-style-heading">Overview</h3>
          <div className="pt-5 row row-col-5">
            {CAR_OVERVIEW.map((item, index) => (
              <div className="col">
                <IconTile
                  icon={<Icons iconIndex={index} />}
                  title={item}
                  value={car[item]}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Key Specifications
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <CarSpecifications
                  specification={CAR_KEY_SPECIFICATIONS}
                  car={car}
                />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Key Features
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <CarSpecifications specification={CAR_KEY_FEATURES} car={car} />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Engine and Transmission
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <CarSpecifications
                  specification={CAR_ENGINE_AND_TRANSMISSION}
                  car={car}
                />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-heading4">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse4"
                aria-expanded="false"
                aria-controls="flush-collapse4"
              >
                Comfort & Convenience
              </button>
            </h2>
            <div
              id="flush-collapse4"
              className="accordion-collapse collapse"
              aria-labelledby="flush-heading4"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <CarSpecifications specification={CAR_COMFORT} car={car} />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-heading5">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse5"
                aria-expanded="false"
                aria-controls="flush-collapse5"
              >
                Interior
              </button>
            </h2>
            <div
              id="flush-collapse5"
              className="accordion-collapse collapse"
              aria-labelledby="flush-heading5"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <CarSpecifications specification={CAR_INTERIOR} car={car} />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-heading5">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse6"
                aria-expanded="false"
                aria-controls="flush-collapse6"
              >
                Exterior
              </button>
            </h2>
            <div
              id="flush-collapse6"
              className="accordion-collapse collapse"
              aria-labelledby="flush-heading6"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <CarSpecifications specification={CAR_EXTERIOR} car={car} />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-heading5">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse7"
                aria-expanded="false"
                aria-controls="flush-collapse7"
              >
                Safety
              </button>
            </h2>
            <div
              id="flush-collapse7"
              className="accordion-collapse collapse"
              aria-labelledby="flush-heading7"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <CarSpecifications specification={CAR_SAFETY} car={car} />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-heading5">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse8"
                aria-expanded="false"
                aria-controls="flush-collapse8"
              >
                Entertainment & Communication
              </button>
            </h2>
            <div
              id="flush-collapse8"
              className="accordion-collapse collapse"
              aria-labelledby="flush-heading8"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <CarSpecifications
                  specification={CAR_COMMUNICATION}
                  car={car}
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row row-cols-5">
          {(car.carSpecs ?? []).map((specs) => (
            <div className={`col pb-5`} key={specs.title}>
              <IconTile {...specs} />
            </div>
          ))}
        </div>
      </div>
      <div className="container py-5">
        <HeadingWithBorder title="Video" />
        <br />
        <ReactPlayer url={'https://youtu.be/NMThdHhrLoM'} width="100%" />
      </div>

      <div className="blog comon-slick content-area">
        <div className="container">
          <div className="main-title">
            <h5 className="text-primary text-uppercase">Popular</h5>
            <span className="mb-10 text-uppercase display-6">
              Car Collection
            </span>
            <div className="title-border">
              <div className="title-border-inner"></div>
              <div className="title-border-inner"></div>
              <div className="title-border-inner"></div>
              <div className="title-border-inner"></div>
              <div className="title-border-inner"></div>
            </div>
          </div>
          <Swiper
            modules={[Navigation, Scrollbar, Pagination]}
            loop={true}
            spaceBetween={0}
            slidesPerView={3}
            navigation={true}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              dynamicBullets: true,
            }}
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <ImageCard {...member} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="row"></div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CarDetail;
