import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import DefaultLayout from "../layouts/DefaultLayout";
import BGOverlaySection from "../components/BGOverlaySection";

const Home = () => {
  return (
    <DefaultLayout>
      <div className="banner" id="banner4">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner text-center">
            <div className="carousel-item banner-max-height active item-bg">
              <img
                className="d-block w-100 h-100"
                src="/assets/img/cars/car-homepage-hero.png"
                alt="banner"
              />
              <div className="carousel-content container text-center banner-info-2 bi-2 text-white d-flex flex-column justify-content-between h-100">
                <div className="pt-5">
                  <p className="text-white display-5">
                    Purchase car fast like a{" "}
                    <span className="text-red text-bold text-uppercase">
                      Rocket
                    </span>
                  </p>
                  <p className="lead text-white">
                    Get a car within 60 mins staying in the comfort your own
                    house.
                  </p>
                </div>
                <div className="container-fluid pb-5">
                  <div className="row g-0">
                    <div className="col-12 p-3">
                      Over 1000 Used Cars Purchased
                    </div>
                    <div className="col-2 offset-md-1">
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
                    <div className="col-2">
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
                    <div className="col-2">
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
                    <div className="col-2">
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
                    <div className="col-2">
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
              Purchase CAR in{" "}
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
        modules={[Navigation, Scrollbar]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
      >
        <SwiperSlide>
          <img
            className="slide-photo"
            src="/assets/img/banner/car-01.jpg"
            alt="car"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide-photo"
            src="/assets/img/banner/car-02.jpg"
            alt="car"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide-photo"
            src="/assets/img/banner/car-03.jpg"
            alt="car"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide-photo"
            src="/assets/img/banner/car-04.jpg"
            alt="car"
          />
        </SwiperSlide>
      </Swiper>

      <div className="content-area bg-grey pt-4">
        <div className="row g-0">
          <div className="col-12">
            <h1 className="display-1 text-light-50 text-thin">About us</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
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
          <div className="col-6">
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
        </div>
      </div>

      <div className="blog comon-slick content-area">
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
              modules={[Navigation, Scrollbar]}
              spaceBetween={0}
              slidesPerView={3}
              navigation={true}
            >
              <SwiperSlide>
                <div className="item slide-box">
                  <div className="blog-4">
                    <div className="blog-photo">
                      <img
                        src="assets/img/blog/blog-2.jpg"
                        alt="blog"
                        className="img-fluid"
                      />
                      <div className="date-box-2">27 Feb</div>
                      <div className="post-meta clearfix">
                        <span>
                          <a href="javascript;">
                            <i className="flaticon-user-1"></i>
                          </a>
                          Admin
                        </span>
                        <span>
                          <a href="javascript;">
                            <i className="flaticon-comment"></i>
                          </a>
                          17K
                        </span>
                        <span>
                          <a href="javascript;">
                            <i className="flaticon-calendar"></i>
                          </a>
                          73k
                        </span>
                      </div>
                    </div>
                    <div className="detail">
                      <p>2022 BMW X7 XDRIVER30D DPE SIGNATURE</p>
                      <span className="text-sm">
                        REG.YEAR - 2021 | KMS - 25000 | FUEL TYPE - Diesel{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item slide-box">
                  <div className="blog-4">
                    <div className="blog-photo">
                      <img
                        src="assets/img/blog/blog-1.jpg"
                        alt="blog"
                        className="img-fluid"
                      />
                      <div className="date-box-2">14 Aug</div>
                      <div className="post-meta clearfix">
                        <span>
                          <a href="javascript;">
                            <i className="flaticon-user-1"></i>
                          </a>
                          Admin
                        </span>
                        <span>
                          <a href="javascript;">
                            <i className="flaticon-comment"></i>
                          </a>
                          17K
                        </span>
                        <span>
                          <a href="javascript;">
                            <i className="flaticon-calendar"></i>
                          </a>
                          73k
                        </span>
                      </div>
                    </div>
                    <div className="detail">
                      <p>Audi Q8 XDRIVER30D DPE SIGNATURE</p>
                      <span className="text-sm">
                        REG.YEAR - 2021 | KMS - 25000 | FUEL TYPE - Diesel{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item slide-box">
                  <div className="blog-4">
                    <div className="blog-photo">
                      <img
                        src="assets/img/blog/blog-2.jpg"
                        alt="blog"
                        className="img-fluid"
                      />
                      <div className="date-box-2">14 Sep</div>
                      <div className="post-meta clearfix">
                        <span>
                          <a href="javascript;">
                            <i className="flaticon-user-1"></i>
                          </a>
                          Admin
                        </span>
                        <span>
                          <a href="javascript;">
                            <i className="flaticon-comment"></i>
                          </a>
                          17K
                        </span>
                        <span>
                          <a href="javascript;">
                            <i className="flaticon-calendar"></i>
                          </a>
                          73k
                        </span>
                      </div>
                    </div>
                    <div className="detail">
                      <p>JAGUAR XDRIVER30D DPE SIGNATURE 1</p>
                      <span className="text-sm">
                        REG.YEAR - 2021 | KMS - 25000 | FUEL TYPE - Diesel{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item slide-box">
                  <div className="blog-4">
                    <div className="blog-photo">
                      <img
                        src="assets/img/blog/blog-3.jpg"
                        alt="blog"
                        className="img-fluid"
                      />
                      <div className="date-box-2">14 Nov</div>
                      <div className="post-meta clearfix">
                        <span>
                          <a href="javascript;">
                            <i className="flaticon-user-1"></i>
                          </a>
                          Admin
                        </span>
                        <span>
                          <a href="javascript;">
                            <i className="flaticon-comment"></i>
                          </a>
                          17K
                        </span>
                        <span>
                          <a href="javascript;">
                            <i className="flaticon-calendar"></i>
                          </a>
                          73k
                        </span>
                      </div>
                    </div>
                    <div className="detail">
                      <p>JAGUAR XDRIVER30D DPE SIGNATURE 1</p>
                      <span className="text-sm">
                        REG.YEAR - 2021 | KMS - 25000 | FUEL TYPE - Diesel{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <BGOverlaySection>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
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
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 pb-md-4">
                  <div className="advantages-box h-100">
                    <div className="icon">
                      <i className="flaticon-shield"></i>
                    </div>
                    <div className="detail">
                      <h5>
                        <a href="services.html">Expert Review On Luxury Cars</a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 pb-md-4">
                  <div className="advantages-box h-100">
                    <div className="icon">
                      <i className="flaticon-deal"></i>
                    </div>
                    <div className="detail">
                      <h5>
                        <a href="services.html">Compare Your Favorite Cars</a>
                        <p>&nbsp;</p>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="advantages-box h-100">
                    <div className="icon">
                      <i className="flaticon-money"></i>
                    </div>
                    <div className="detail">
                      <h5>
                        <a href="services.html">
                          More Than 317 Luxury Cars &It's In Depth
                          Specifications
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="advantages-box h-100">
                    <div className="icon">
                      <i className="flaticon-support-2"></i>
                    </div>
                    <div className="detail">
                      <h5>
                        <a href="services.html">Expert Review On Luxury Cars</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BGOverlaySection>

      <div className="blog comon-slick content-area">
        <div className="container text-center">
          <div className="main-title">
            <h5 className="text-primary text-uppercase">New & Updates</h5>
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
              slidesPerView={2}
              navigation={true}
            >
              <SwiperSlide>
                <div className="item slide-box">
                  <div className="blog-4">
                    <div className="blog-photo">
                      <img
                        src="assets/img/wish/bmw.jpg"
                        alt="blog"
                        className="img-fluid"
                      />
                      <div className="post-meta clearfix">
                        <span>
                          <a href="javascript;">
                            <i className="flaticon-user-1"></i>
                          </a>
                          Admin
                        </span>
                        <span>
                          <a href="javascript;">
                            <i className="flaticon-comment"></i>
                          </a>
                          17K
                        </span>
                        <span>
                          <a href="javascript;">
                            <i className="flaticon-calendar"></i>
                          </a>
                          73k
                        </span>
                      </div>
                    </div>
                    <div className="detail">
                      <p>2022 BMW X7 XDRIVER30D DPE SIGNATURE</p>
                      <span className="text-sm">
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
                  <div className="blog-4">
                    <div className="blog-photo">
                      <img
                        src="assets/img/wish/5530214.jpg"
                        alt="blog"
                        className="img-fluid"
                      />
                      <div className="post-meta clearfix">
                        <span>
                          <a href="javascript;">
                            <i className="flaticon-user-1"></i>
                          </a>
                          Admin
                        </span>
                        <span>
                          <a href="javascript;">
                            <i className="flaticon-comment"></i>
                          </a>
                          17K
                        </span>
                        <span>
                          <a href="javascript;">
                            <i className="flaticon-calendar"></i>
                          </a>
                          73k
                        </span>
                      </div>
                    </div>
                    <div className="detail">
                      <p>Audi Q8 XDRIVER30D DPE SIGNATURE</p>
                      <span className="text-sm">
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
