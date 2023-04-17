import DefaultLayout from '../layouts/DefaultLayout';
import ListView from '../components/ListView';
import data from '../Data.json';
import { useNavigate } from 'react-router-dom';

const MyWishList = () => {
  const navigate = useNavigate();

  const goToDetails = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/carDetails/${index}`);
  };

  return (
    <DefaultLayout>
      <div className="featured-car content-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ListView cars={data.cars} onClick={goToDetails} />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default MyWishList;
