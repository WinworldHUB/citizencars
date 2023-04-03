import ListView from "../components/ListView";
import SideSearch from "../components/SideSearch";
import DefaultLayout from "../layouts/DefaultLayout";
import data from "../Data.json";
import { useNavigate } from "react-router-dom";

const CarCollection = () => {
  const navigate = useNavigate();

  const goToDetails = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/carDetails/${index}`);
  };

  return (
    <>
      <DefaultLayout>
        <div className="featured-car content-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <SideSearch />
              </div>
              <div className="col-lg-8 col-md-12">
                <ListView cars={data.cars} onClick={goToDetails} />
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default CarCollection;
