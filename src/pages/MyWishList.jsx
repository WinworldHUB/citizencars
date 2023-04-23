import DefaultLayout from '../layouts/DefaultLayout';
import ListView from '../components/ListView';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import DBService from '../DBService';
import { LocalDataContext } from '../App';

const MyWishList = () => {
  const navigate = useNavigate();
  const { userId } = useContext(LocalDataContext);
  const [cars, setCars] = useState(null);
  const [inProgressMessage, setInProgressMessage] = useState('');

  useEffect(() => {
    setInProgressMessage('Loading wishlist ...');
    DBService.getMyWishList(
      userId,
      (response) => {
        if (response.length > 0) {
          setCars(response);
          setInProgressMessage('');
        } else {
          setInProgressMessage('Your wishlist is empty');
        }
      },
      (err) => {
        console.log(err.message ?? err);
        setInProgressMessage(err.message ?? err);
      }
    );
  }, []);

  const goToDetails = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/carDetails/${index}`);
  };

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
    <DefaultLayout>
      <div className="featured-car content-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {cars && <ListView cars={cars} onClick={goToDetails} />}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default MyWishList;
