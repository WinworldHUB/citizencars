import DefaultLayout from '../layouts/DefaultLayout';
import Checkbox from '../elements/Checkbox';
import { Link } from 'react-router-dom';
import DBService from '../DBService';
import { useContext, useEffect, useState } from 'react';
import Inputbox from '../elements/Inputbox';
import Notification from '../components/Notification';
import { LocalDataContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const { userId, setUserId } = useContext(LocalDataContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState('');
  const navigate = useNavigate();

  console.log(userId);
  useEffect(() => {
    if (userId) {
      navigate('/mywish');
    }
  }, []);

  return (
    <DefaultLayout>
      <div
        style={{
          position: 'relative',
          backgroundImage:
            'url(/assets/img/collection/toyota_corolla_2013-1920x1200.jpg)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          minHeight: '700px',
        }}
        className="p-5"
      >
        <div
          className="p-5 text-center"
          style={{
            backgroundColor: 'rgba(240, 240, 240, 0.7)',
            position: 'absolute',
            right: '50px',
            backdropFilter: 'blur(5px)',
            minHeight: '70%',
            width: '30%',
          }}
        >
          <h3>Log in to your account</h3>
          <p>Welcome back ! Sing in to your account</p>
          <p>Continue with</p>
          <img src="/assets/img/Google-Logo-Meaning_F 1.png" alt="" />
          <p className="pt-3">or</p>
          <div className="text-start pb-5">
            <div className="form-group">
              <Inputbox
                onChange={(newValue) => {
                  setUsername(newValue);
                }}
                placeholder="email or username"
                value={username}
              />
            </div>
            <div className="form-group">
              <Inputbox
                isPassword={true}
                onChange={(newValue) => {
                  setPassword(newValue);
                }}
                placeholder="password"
                value={password}
              />
            </div>
            {notification && <Notification>{notification}</Notification>}
            <div className="d-flex justify-content-between">
              <div className="form-group">
                <Checkbox
                  title="Remember me"
                  onChecked={(isChecked) => {
                    console.log(isChecked);
                  }}
                ></Checkbox>
              </div>
              <div className="form-group">
                <span className="text-primary clickable">Forgot password</span>
              </div>
            </div>
          </div>
          <div className="form-group">
            <button
              className="btn btn-primary"
              disabled={isLoading}
              onClick={() => {
                setNotification('');
                setIsLoading(true);
                DBService.authenticate(
                  username,
                  password,
                  (response) => {
                    console.log(response);
                    setUserId(response);
                    setIsLoading(false);
                    navigate('/mywish');
                  },
                  (error) => {
                    console.log(error);
                    setNotification(error);
                    setIsLoading(false);
                  }
                );
              }}
            >
              {isLoading ? <i className="fa fa-spinner fa-spin"></i> : 'Login'}
            </button>
          </div>
          <div className="form-group">
            <div>
              Don't have any account?{' '}
              <Link className="text-primary" to="/signup">
                Register now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Signin;
