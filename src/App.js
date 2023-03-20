import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function App() {
  return (
    <>
      <header
        className="main-header header-fixed sticky-header"
        id="main-header-3"
      >
        <div className="container">
          <div className="header-inner bg-transparent">
            <nav className="d-flex justify-content-between navbar navbar-expand-lg bg-transparent">
              <img
                src="/assets/img/logos/logo-3.png"
                alt="Citizen Cars"
                className="logo-photo"
              />
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-white" href="javascript;">
                    BUY: 99999999
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="javascript;">
                    SELL: 99999999
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="javascript;">
                    About us
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link text-white bg-primary"
                    href="javascript;"
                  >
                    Our Collection
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link bg-light b-0" href="javascript;">
                    Login
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
                src="/assets/img/car/car-homepage-hero.png"
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
                      <div class="form-group">
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
                      <div class="form-group">
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
                      <div class="form-group">
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
                      <div class="form-group">
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
                      <div class="form-group">
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

      <div class="featured-car content-area">
        <div class="container-fluid">
          <div class="text-center">
            <p className="display-6">
              Planning to <span className="text-red text-uppercase">Sell?</span>
            </p>
            <p className="display-6">
              Purchase CAR in{" "}
              <span className="text-red text-bold text-uppercase">
                29 Minutes
              </span>
            </p>
            <div class="title-border">
              <div class="title-border-inner"></div>
              <div class="title-border-inner"></div>
              <div class="title-border-inner"></div>
              <div class="title-border-inner"></div>
              <div class="title-border-inner"></div>
            </div>
          </div>
          <div class="row pt-5 text-center">
            <div class="col-md-3 d-flex justify-content-center">
              <div class="advantages-4">
                <div class="advantages-4-inner">
                  <i class="fa-solid fa-percent"></i>
                  <p>Outright</p>
                </div>
                <h6 className="text-primary text-bold">SALE</h6>
              </div>
            </div>

            <div class="col-md-3 d-flex justify-content-center">
              <div class="advantages-4">
                <div class="advantages-4-inner text-center">
                  <i class="fa-regular fa-clock"></i>
                  <p>Best Offer</p>
                </div>
                <h6 className="text-primary text-bold">in 29 minutes</h6>
              </div>
            </div>

            <div class="col-md-3 d-flex justify-content-center">
              <div class="advantages-4">
                <div class="advantages-4-inner text-center">
                  <i class="fa-solid fa-users-line"></i>
                  <p>7600+ satisfied</p>
                </div>
                <h6 className="text-primary text-bold">Customers</h6>
              </div>
            </div>

            <div class="col-md-3 d-flex justify-content-center">
              <div class="advantages-4">
                <div class="advantages-4-inner text-center">
                  <i class="fa-regular fa-circle-check"></i>
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
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
      >
        <SwiperSlide>
          <img src="/assets/img/banner/img-1.jpg" alt="car" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/img/banner/img-3.jpg" alt="car" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/img/banner/img-4.jpg" alt="car" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/img/banner/img-5.jpg" alt="car" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/img/banner/img-6.jpg" alt="car" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default App;
