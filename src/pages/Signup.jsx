import DefaultLayout from '../layouts/DefaultLayout';
import Checkbox from '../elements/Checkbox';
import { Link } from 'react-router-dom';
import Inputbox from '../elements/Inputbox';
import { useState } from 'react';
import Dialog from '../components/Dialog';
import DBService from '../DBService';
import Notification from '../components/Notification';

const Signup = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [notification, setNotification] = useState('');
  const [isFormReady, setIsFormReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
            right: '50px',
            backdropFilter: 'blur(5px)',
            minHeight: '70%',
            width: '30%',
          }}
        >
          <h3 className="text-white">Log in to your account</h3>
          <p className="text-white">Create new account today.</p>
          <p className="text-white">Continue with</p>
          <img src="/assets/img/Google-Logo-Meaning_F 1.png" alt="" />
          <p className="pt-3 text-white">or</p>
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
                  console.log(isChecked);
                }}
                className="text-white"
              ></Checkbox>
            </div>
            <div className="form-group">
              <Checkbox
                title="I accept the privacy policy"
                onChecked={(isChecked) => {
                  console.log(isChecked);
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
                data-bs-toggle={isFormReady ? '' : 'modal'}
                data-bs-target={isFormReady ? '' : '#testModal'}
                onClick={() => {
                  setNotification('');
                  setConfirmPassword('');

                  if (isFormReady) {
                    DBService.register(
                      name,
                      phone,
                      username,
                      password,
                      (response) => {
                        console.log(response);
                        setNotification(response);
                        setIsLoading(false);
                      },
                      (error) => {
                        console.log(error);
                        setNotification(error);
                        setIsLoading(false);
                      }
                    );
                  }
                }}
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
        onAction={() => {
          if (!confirmPassword || confirmPassword !== password) {
            setNotification('Password mismatch. Please try again');
            setIsFormReady(false);
          } else {
            setIsFormReady(true);
          }
        }}
        onCanceled={() => {
          setIsFormReady(false);
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
