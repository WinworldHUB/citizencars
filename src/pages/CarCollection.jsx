import { useEffect, useState } from 'react';
import ListView from '../components/ListView';
import SideSearch from '../components/SideSearch';
import DefaultLayout from '../layouts/DefaultLayout';
import { useNavigate } from 'react-router-dom';
import DBService from '../DBService';

const CarCollection = () => {
  const [cars, setCars] = useState(null);
  const [inProgressMessage, setInProgressMessage] = useState('');
  const navigate = useNavigate();

  const goToDetails = (index) => {
    navigate(`/carDetails/${index}`);
  };

  const getCars = () => {
    DBService.getCars(
      (response) => {
        if (Array.isArray(response) && response.length > 0) {
          setCars(response);
          setInProgressMessage('');
        } else {
          setInProgressMessage('No cars found. Use upload cars to upload data');
        }
      },
      (err) => {
        console.log(err.message ?? err);
        setInProgressMessage(err.message ?? err);
      }
    );
  };

  useEffect(() => {
    setInProgressMessage('Loading cars...');
    getCars();
  }, []);

  if (inProgressMessage !== '') {
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
    <>
      <DefaultLayout>
        <div className="featured-car content-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <SideSearch />
              </div>
              <div className="col-lg-8 col-md-12">
                {cars && (
                  <ListView
                    cars={cars}
                    onClick={(carSrNo) => goToDetails(carSrNo)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default CarCollection;
