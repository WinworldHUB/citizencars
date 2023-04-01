import ListView from "../components/ListView";
import SideSearch from "../components/SideSearch";
import DefaultLayout from "../layouts/DefaultLayout";

const cars = [
  {
    pic: "assets/img/cars/car-1.jpg",
    name: "Hyundai Santa",
    isFeatured: true,
    price: "8.5 Lakhs",
    buildYear: "2022",
    totalRun: "4,000 km",
    transmission: "Manual",
  },
  {
    pic: "assets/img/cars/car-2.jpg",
    name: "Hyundai Santa",
    isFeatured: false,
    price: "8.5 Lakhs",
    buildYear: "2022",
    totalRun: "4,000 km",
    transmission: "Manual",
  },
  {
    pic: "assets/img/cars/car-3.jpg",
    name: "Hyundai Santa",
    isFeatured: false,
    price: "8.5 Lakhs",
    buildYear: "2022",
    totalRun: "4,000 km",
    transmission: "Manual",
  },
  {
    pic: "assets/img/cars/car-4.jpg",
    name: "Hyundai Santa",
    isFeatured: false,
    price: "8.5 Lakhs",
    buildYear: "2022",
    totalRun: "4,000 km",
    transmission: "Manual",
  },
  {
    pic: "assets/img/cars/car-5.jpg",
    name: "Hyundai Santa",
    isFeatured: false,
    price: "8.5 Lakhs",
    buildYear: "2022",
    totalRun: "4,000 km",
    transmission: "Manual",
  },
  {
    pic: "assets/img/cars/car-6.jpg",
    name: "Hyundai Santa",
    isFeatured: false,
    price: "8.5 Lakhs",
    buildYear: "2022",
    totalRun: "4,000 km",
    transmission: "Manual",
  },
];

const CarCollection = () => {
  return (
    <>
      <DefaultLayout isTopMarginRequired={true}>
        <div className="featured-car content-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <SideSearch />
              </div>
              <div className="col-lg-8 col-md-12">
                <ListView cars={cars} />
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default CarCollection;
