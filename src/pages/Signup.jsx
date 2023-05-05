import DefaultLayout from '../layouts/DefaultLayout';
import Checkbox from '../elements/Checkbox';
import { Link, useNavigate } from 'react-router-dom';
import Inputbox from '../elements/Inputbox';
import { useState } from 'react';
import Dialog from '../components/Dialog';
import DBService from '../DBService';
import Notification from '../components/Notification';
import { useMediaQuery } from 'react-responsive';

const Signup = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [notification, setNotification] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPrivateSeller, setIsPrivateSeller] = useState(false);
  const [isAcceptPolicy, setIsAcceptPolicy] = useState(false);
  const navigateTo = useNavigate();

  const register = () => {
    setIsLoading(true);
    DBService.register(
      name,
      phone,
      username,
      password,
      () => {
        setNotification('');
        setConfirmPassword('');
        setIsLoading(false);
        navigateTo('/signin');
      },
      (error) => {
        console.log(error);
        setNotification(error);
        setIsLoading(false);
      }
    );
  };

  const validateForm = () => {
    setNotification('');
    setConfirmPassword('');
    if (
      name.trim() === '' ||
      username.trim() === '' ||
      phone.trim() === '' ||
      password.trim() === ''
    ) {
      setNotification('Please enter details for registration');
    } else if (!isAcceptPolicy) {
      setNotification('Please accept our policy to continue with registration');
    } else if (!confirmPassword) {
      // eslint-disable-next-line no-undef
      var myModal = new bootstrap.Modal(document.getElementById('testModal'));
      myModal.show();
    } else if (confirmPassword !== password) {
      setNotification('Password mismatch. Please try again');
    } else {
      register();
    }
  };

  return (
    <DefaultLayout>
      <div
        style={{
          position: 'relative',
          backgroundImage:
            'url(/assets/img/collection/honda_s660_2015-2560x1600.jpg)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          height: '100vh',
        }}
        className="p-5"
      >
        <div
          className="p-5 text-center"
          style={{
            backgroundColor: 'rgba(240, 240, 240, 0.1)',
            position: 'absolute',
            top: '10px',
            right: isTabletOrMobile ? '5%' : '50px',
            left: isTabletOrMobile ? '5%' : '70%',
            backdropFilter: 'blur(5px)',
            minHeight: '70%',
          }}
        >
          <h3 className="text-white">Log in to your account</h3>
          <p className="text-white">Create new account today.</p>
          <br />
          <div className="text-start pb-5">
            <div className="form-group">
              <Inputbox
                onChange={(newValue) => {
                  setName(newValue);
                }}
                placeholder="Full name"
                value={name}
              />
            </div>
            <div className="form-group">
              <Inputbox
                onChange={(newValue) => {
                  setUsername(newValue);
                }}
                placeholder="Email"
                value={username}
              />
            </div>
            <div className="form-group">
              <Inputbox
                onChange={(newValue) => {
                  setPhone(newValue);
                }}
                placeholder="Phone"
                value={phone}
              />
            </div>
            <div className="form-group">
              <Inputbox
                isPassword={true}
                onChange={(newValue) => {
                  setPassword(newValue);
                }}
                placeholder="Password"
                value={password}
              />
            </div>
            {notification && <Notification>{notification}</Notification>}
            <div className="form-group">
              <Checkbox
                title="Private Seller"
                onChecked={(isChecked) => {
                  setIsPrivateSeller(isChecked);
                }}
                className="text-white"
              ></Checkbox>
            </div>
            <div className="form-group">
              <Checkbox
                title="I accept the privacy policy"
                onChecked={(isChecked) => {
                  setIsAcceptPolicy(isChecked);
                }}
                className="text-white"
              ></Checkbox>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="form-group">
              <button
                disabled={isLoading}
                className="btn btn-primary"
                onClick={validateForm}
              >
                {isLoading ? (
                  <i className="fa fa-spinner fa-spin"></i>
                ) : (
                  'Register'
                )}
              </button>
            </div>
            <div className="form-group text-white">
              <Link
                className="text-white btn btn-dark"
                to="/signin"
                disabled={isLoading}
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        actionTitle="Confirm"
        id="testModal"
        title="Confirm Password"
        onAction={validateForm}
        onCanceled={() => {
          setNotification('Please confirm password to proceed');
        }}
      >
        <div className="form-group">
          <label htmlFor="txtConfirmPassword">Re-enter password</label>
          <Inputbox
            id="txtConfirmPassword"
            isPassword={true}
            onChange={(newValue) => {
              setConfirmPassword(newValue);
            }}
            placeholder="Confirm password"
            value={confirmPassword}
          />
        </div>
      </Dialog>
    </DefaultLayout>
  );
};

export default Signup;
