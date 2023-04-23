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
  //const carIndex = index ?? 0;

  useEffect(() => {
    DBService.getCar(
      index,
      (response) => {
        setCar(response);
        setInProgressMessage('');
      },
      (err) => {
        setInProgressMessage(err.data);
        setInProgressMessage('');
      }
    );
  }, []);

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
            <i class="fa-solid fa-indian-rupee-sign"></i>
            {` ${numeral(car['Price']).format('$ 0,0.00')} EMI STARTS WITH @ `}
            <i class="fa-solid fa-indian-rupee-sign"></i>
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
          <p>{car.Description ?? ''}</p>
        </div>
      </div>
      <div className="container py-5">
        <HeadingWithBorder title="Specifications" />
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
