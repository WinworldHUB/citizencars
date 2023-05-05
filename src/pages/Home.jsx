import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import DefaultLayout from '../layouts/DefaultLayout';
import data from '../Data.json';
import { useMediaQuery } from 'react-responsive';
import BGOverlaySection2 from '../components/BGOverlaySection2';

const Home = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
  return (
    <DefaultLayout isTopMarginRequired={false}>
      <div className="banner" id="banner4">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner text-center">
            <div className="carousel-item banner-max-height active item-bg d-flex flex-column justify-content-between relative-position">
              <img
                className="d-block w-100 h-100"
                src="/assets/img/cars/car-homepage-hero.png"
                alt="banner"
              />
              <div className="carousel-content container text-center banner-info-2 bi-2 text-white h-100">
                <div className="pt-5">
                  <p className="text-white display-5">
                    Purchase car fast like a{' '}
                    <span className="text-red text-bold text-uppercase">
                      Rocket
                    </span>
                  </p>
                  <p className="lead text-white">
                    Get a car within 60 mins staying in the comfort your own
                    house.
                  </p>
                </div>
                <div
                  className="container-fluid pb-5"
                  style={{ position: 'absolute', bottom: '10px', right: '0' }}
                >
                  <div className="row g-0">
                    <div className="col-12 p-3">
                      Over 1000 Used Cars Purchased
                    </div>
                    <div className="col-sm-2 offset-md-1">
                      <div className="form-group">
                        <select className="form-control" name="select-brand">
                          <option>Select Brand</option>
                          <option>Audi</option>
                          <option>BMW</option>
                          <option>Honda</option>
                          <option>Nissan</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="form-group">
                        <select className="form-control" name="select-brand">
                          <option>Select Make</option>
                          <option>Audi</option>
                          <option>BMW</option>
                          <option>Honda</option>
                          <option>Nissan</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="form-group">
                        <select className="form-control" name="select-brand">
                          <option>Select Location</option>
                          <option>Audi</option>
                          <option>BMW</option>
                          <option>Honda</option>
                          <option>Nissan</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="form-group">
                        <select className="form-control" name="select-brand">
                          <option>Select Year</option>
                          <option>Audi</option>
                          <option>BMW</option>
                          <option>Honda</option>
                          <option>Nissan</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="form-group">
                        <button className="btn btn-primary form-control search-button">
                          <i className="fa fa-search text-white"></i> Find
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="featured-car content-area">
        <div className="container-fluid">
          <div className="text-center">
            <p className="display-6">
              Planning to <span className="text-red text-uppercase">Sell?</span>
            </p>
            <p className="display-6">
              Purchase CAR in{' '}
              <span className="text-red text-bold text-uppercase">
                29 Minutes
              </span>
            </p>
            <div className="title-border">
              <div className="title-border-inner"></div>
              <div className="title-border-inner"></div>
              <div className="title-border-inner"></div>
              <div className="title-border-inner"></div>
              <div className="title-border-inner"></div>
            </div>
          </div>
          <div className="row pt-5 text-center">
            <div className="col-md-3 d-flex justify-content-center">
              <div className="advantages-4">
                <div className="advantages-4-inner">
                  <i className="fa-solid fa-percent"></i>
                  <p>Outright</p>
                </div>
                <h6 className="text-primary text-bold">SALE</h6>
              </div>
            </div>

            <div className="col-md-3 d-flex justify-content-center">
              <div className="advantages-4">
                <div className="advantages-4-inner text-center">
                  <i className="fa-regular fa-clock"></i>
                  <p>Best Offer</p>
                </div>
                <h6 className="text-primary text-bold">in 29 minutes</h6>
              </div>
            </div>

            <div className="col-md-3 d-flex justify-content-center">
              <div className="advantages-4">
                <div className="advantages-4-inner text-center">
                  <i className="fa-solid fa-users-line"></i>
                  <p>7600+ satisfied</p>
                </div>
                <h6 className="text-primary text-bold">Customers</h6>
              </div>
            </div>

            <div className="col-md-3 d-flex justify-content-center">
              <div className="advantages-4">
                <div className="advantages-4-inner text-center">
                  <i className="fa-regular fa-circle-check"></i>
                  <p>Hassle Free</p>
                </div>
                <h6 className="text-primary text-bold">Processing</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Scrollbar, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
      >
        {data.banner.map((bannerPic) => (
          <SwiperSlide>
            <img className="slide-photo" src={bannerPic} alt="car" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="content-area bg-grey-4 pt-4">
        <div className="row g-0">
          <div className="col-12">
            <h1 className="display-1 text-light-50 text-thin">About us</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card card-about shadow-sm text-center">
              <div className="card-body">
                <h1 className="display-1">20+</h1>
                <h5 className="text-thin text-primary">Years Experience</h5>
              </div>
            </div>
            <div className="about-content">
              <p className="display-7 text-uppercase text-bold">
                Purchase your car in
              </p>
              <p className="display-7 text-uppercase text-bold text-primary">
                29 minutes
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Dignissim nulla urna
                iaculis suspendisse hendrerit duis Adipiscing neque erat
                venenatis velit aliquet fringilla faucibus dolor. Tellus lacus
                at eget. Adipiscing neque erat venenatis velit aliquet fringilla
                faucibus dolor. Tellus lacus at eget. Adipiscing neque erat
                venenatis velit aliquet fringilla faucibus dolor. Tellus lacus
                at eget.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="slide-photo"
              src="/assets/img/car-about-01.png"
              alt="About us"
            />
          </div>
        </div>
      </div>

      <div className="latest-offers categories content-area-13">
        <div className="container">
          <div className="main-title text-center">
            <h5 className="text-primary text-uppercase">Browse Cars</h5>
            <span className="mb-10 text-uppercase display-6">
              New Luxury Cars in India
            </span>
            <div className="title-border">
              <div className="title-border-inner"></div>
              <div className="title-border-inner"></div>
              <div className="title-border-inner"></div>
              <div className="title-border-inner"></div>
              <div className="title-border-inner"></div>
            </div>
          </div>
          <div className="row row-2">
            <div className="col-lg-4 col-md-12">
              <div className="row">
                <div className="col-md-6 col-lg-12 col-pad">
                  <div className="latest-offers-box">
                    <div className="photo-overflow">
                      <div className="car-thumbnail-photo">
                        <img
                          className="img-fluid w-100"
                          src="assets/img/cars/car-4.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="new">2022</div>
                    <div className="ling-section">
                      <div className="lo-text clearfix">
                        <h3>
                          <a href="car-details.html">Toyota Prius specs</a>
                        </h3>
                        <p className="text-white">
                          BMW X7 XDRIVER30D DPE SIGNATURE
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-12 col-pad">
                  <div className="latest-offers-box">
                    <div className="photo-overflow">
                      <div className="car-thumbnail-photo">
                        <img
                          className="img-fluid w-100"
                          src="assets/img/cars/car-6.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="new">2022</div>
                    <div className="ling-section">
                      <div className="lo-text clearfix">
                        <h3>
                          <a href="car-details.html">Audi Q7 2018</a>
                        </h3>
                        <p className="text-white">
                          BMW X7 XDRIVER30D DPE SIGNATURE
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-pad">
              <div className="latest-offers-box">
                <div className="photo-overflow">
                  <div className="car-thumbnail-photo">
                    <img
                      className="img-fluid w-100"
                      src="assets/img/cars/car-11.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="new">2022</div>
                <div className="ling-section">
                  <div className="lo-text clearfix">
                    <h3>
                      <a href="car-details.html">Audi 2021</a>
                    </h3>
                    <p className="text-white">
                      BMW X7 XDRIVER30D DPE SIGNATURE
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="row">
                <div className="col-md-12 col-lg-12 col-pad">
                  <div className="latest-offers-box">
                    <div className="photo-overflow">
                      <div className="car-thumbnail-photo">
                        <img
                          className="img-fluid w-100"
                          src="assets/img/cars/car-1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="new">2022</div>
                    <div className="ling-section">
                      <div className="lo-text clearfix">
                        <h3>
                          <a href="car-details.html">Toyota Prius</a>
                        </h3>
                        <p className="text-white">
                          BMW X7 XDRIVER30D DPE SIGNATURE
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-12 col-pad">
                  <div className="latest-offers-box">
                    <div className="photo-overflow">
                      <div className="car-thumbnail-photo">
                        <img
                          className="img-fluid w-100"
                          src="assets/img/cars/car-2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="new">2022</div>
                    <div className="ling-section">
                      <div className="lo-text clearfix">
                        <h3>
                          <a href="car-details.html">2020 Ford Mustang</a>
                        </h3>
                        <p className="text-white">
                          BMW X7 XDRIVER30D DPE SIGNATURE
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-8 offset-md-2">
              <div className="row row-cols-md-3">
                <div className="col pb-md-4">
                  <div className="advantages-box-wish h-100">
                    <div className="icon">
                      <i class="fa-solid fa-hand-holding-dollar"></i>
                    </div>
                    <div className="detail">
                      <h5 className="text-muted">
                        <a href="javascript;">Expert Review On Luxury Cars</a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col pb-md-4">
                  <div className="advantages-box-wish h-100">
                    <div className="icon">
                      <i class="fa-solid fa-car"></i>
                    </div>
                    <div className="detail">
                      <h5>
                        <a href="javascript;">Compare Your Favorite Cars</a>
                        <p>&nbsp;</p>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col pb-md-4">
                  <div className="advantages-box-wish h-100">
                    <div className="icon">
                      <i class="fa-regular fa-thumbs-up"></i>
                    </div>
                    <div className="detail">
                      <h5>
                        <a href="javascript;">
                          More Than 317 Luxury Cars & It's In Depth
                          Specifications
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog comon-slick content-area bg-grey-4">
        <div className="container">
          <div className="main-title">
            <h5 className="text-primary text-uppercase">Popular</h5>
            <span className="mb-10 text-uppercase display-6">
              New Luxury Cars in India
            </span>
            <div className="title-border">
              <div className="title-border-inner"></div>
              <div className="title-border-inner"></div>
              <div className="title-border-inner"></div>
              <div className="title-border-inner"></div>
              <div className="title-border-inner"></div>
            </div>
          </div>
          <div
            className="slick row comon-slick-inner"
            data-slick='{"slidesToShow": 3, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 2}}, {"breakpoint": 768,"settings":{"slidesToShow": 1}}]}'
          >
            <Swiper
              modules={[Navigation, Scrollbar, Pagination]}
              loop={true}
              spaceBetween={0}
              slidesPerView={isTabletOrMobile ? 1 : 3}
              navigation={true}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                dynamicBullets: true,
              }}
            >
              <SwiperSlide>
                <div className="item slide-box">
                  <div className="blog-4">
                    <div className="blog-photo relative-position">
                      <img
                        src="assets/img/blog/blog-2.jpg"
                        alt="blog"
                        className="img-fluid"
                      />
                      <div className="like-icon">
                        <i class="fa-solid fa-heart"></i>
                      </div>
                    </div>
                    <div className="detail border-top border-primary">
                      <p>2022 BMW X7 XDRIVER30D DPE SIGNATURE</p>
                      <span className="text-sm">
                        REG.YEAR - 2021 | KMS - 25000 | FUEL TYPE - Diesel{' '}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item slide-box">
                  <div className="blog-4">
                    <div className="blog-photo relative-position">
                      <img
                        src="assets/img/blog/blog-1.jpg"
                        alt="blog"
                        className="img-fluid"
                      />
                      <div className="like-icon">
                        <i class="fa-solid fa-heart"></i>
                      </div>
                    </div>
                    <div className="detail border-top border-primary">
                      <p>Audi Q8 XDRIVER30D DPE SIGNATURE</p>
                      <span className="text-sm">
                        REG.YEAR - 2021 | KMS - 25000 | FUEL TYPE - Diesel{' '}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item slide-box">
                  <div className="blog-4">
                    <div className="blog-photo relative-position">
                      <img
                        src="assets/img/blog/blog-2.jpg"
                        alt="blog"
                        className="img-fluid"
                      />
                      <div className="like-icon">
                        <i class="fa-solid fa-heart"></i>
                      </div>
                    </div>
                    <div className="detail border-top border-primary">
                      <p>JAGUAR XDRIVER30D DPE SIGNATURE 1</p>
                      <span className="text-sm">
                        REG.YEAR - 2021 | KMS - 25000 | FUEL TYPE - Diesel{' '}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item slide-box">
                  <div className="blog-4">
                    <div className="blog-photo relative-position">
                      <img
                        src="assets/img/blog/blog-3.jpg"
                        alt="blog"
                        className="img-fluid"
                      />
                      <div className="like-icon">
                        <i class="fa-solid fa-heart"></i>
                      </div>
                    </div>
                    <div className="detail">
                      <p>JAGUAR XDRIVER30D DPE SIGNATURE 1</p>
                      <span className="text-sm">
                        REG.YEAR - 2021 | KMS - 25000 | FUEL TYPE - Diesel{' '}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <BGOverlaySection2>
        <div className="container">
          <div className="row">
            <div className="col-sm-5 align-self-center">
              <div className="main-title">
                <h5 className="text-uppercase text-light-80">How it works</h5>
                <h2 className="pb-4">Our Advantages</h2>
                <p>
                  Buying used luxury cars in India was never this easy. You can
                  now own your dream luxury car in just 4 simple steps at Big
                  Boy Toyz, India's trusted used car portal. Buying used luxury
                  cars in India was never this easy. You can now own your dream
                  luxury car in just 4 simple steps at Big Boy Toyz, India's
                  trusted used car portal. Buying used luxury cars in India was
                  never this easy. You can now own your dream luxury car in just
                  4 simple steps at Big Boy Toyz, India's trusted used car
                  portal.
                </p>
              </div>
            </div>
            <div className="col-sm-7 d-xs-none">
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="advantages-box h-100">
                    <div className="icon">
                      <i className="flaticon-shield"></i>
                    </div>
                    <div className="detail">
                      <h5>
                        <a href="javascript;">Expert Review On Luxury Cars</a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="advantages-box h-100">
                    <div className="icon">
                      <i className="flaticon-deal"></i>
                    </div>
                    <div className="detail">
                      <h5>
                        <a href="javascript;">Compare Your Favorite Cars</a>
                        <p>&nbsp;</p>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="advantages-box h-100">
                    <div className="icon">
                      <i className="flaticon-money"></i>
                    </div>
                    <div className="detail">
                      <h5>
                        <a href="javascript;">
                          More Than 317 Luxury Cars &It's In Depth
                          Specifications
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="advantages-box h-100">
                    <div className="icon">
                      <i className="flaticon-support-2"></i>
                    </div>
                    <div className="detail">
                      <h5>
                        <a href="javascript;">Expert Review On Luxury Cars</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BGOverlaySection2>

      <div className="blog comon-slick content-area">
        <div className="container text-center">
          <div className="main-title">
            <h5 className="text-primary text-uppercase">News & Updates</h5>
            <span className="mb-10 text-uppercase display-6">
              From the name here
            </span>
            <div className="title-border">
              <div className="title-border-inner"></div>
              <div className="title-border-inner"></div>
              <div className="title-border-inner"></div>
              <div className="title-border-inner"></div>
              <div className="title-border-inner"></div>
            </div>
          </div>
          <div
            className="slick row comon-slick-inner"
            data-slick='{"slidesToShow": 3, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 2}}, {"breakpoint": 768,"settings":{"slidesToShow": 1}}]}'
          >
            <Swiper
              modules={[Navigation, Scrollbar]}
              spaceBetween={0}
              slidesPerView={isMobile ? 1 : 2}
              navigation={true}
            >
              <SwiperSlide>
                <div className="item slide-box">
                  <div className="blog-4" style={{ position: 'relative' }}>
                    <div className="blog-photo">
                      <img
                        src="assets/img/wish/mercedes_benz_c_300_amg_line_2022_3_4k_hd_cars.jpg"
                        alt="blog"
                        className="img-fluid"
                      />
                    </div>
                    <div
                      className="detail"
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        textAlign: 'left',
                        position: 'absolute',
                        bottom: '0',
                      }}
                    >
                      <p className="text-white">
                        2022 BMW X7 XDRIVER30D DPE SIGNATURE
                      </p>
                      <span className="text-sm text-white">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat.
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item slide-box">
                  <div className="blog-4" style={{ position: 'relative' }}>
                    <div className="blog-photo">
                      <img
                        src="assets/img/wish/5530214.jpg"
                        alt="blog"
                        className="img-fluid"
                      />
                    </div>
                    <div
                      className="detail"
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        textAlign: 'left',
                        position: 'absolute',
                        bottom: '0',
                      }}
                    >
                      <p className="text-white">
                        Audi Q8 XDRIVER30D DPE SIGNATURE
                      </p>
                      <span className="text-sm text-white">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat.
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <button className="btn btn-primary rounded ps-5 pe-5 text-md">
            Join Us
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
