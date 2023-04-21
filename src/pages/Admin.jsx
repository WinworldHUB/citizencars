import { useState } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import Inputbox from '../elements/Inputbox';
import Notification from '../components/Notification';
import DBService from '../DBService';
import ListView from '../components/ListView';
import data from '../Data.json';
import * as XLSX from 'xlsx';
import { CAR_ATTRIBUTES } from '../constants';
import InProgress from '../components/InProgress';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const processData = (dataFromExcel) => {
    if (dataFromExcel) {
      setIsUploading(true);
      const excelDataRows = Array.from(dataFromExcel);
      const dataRowsToExclude = [];

      excelDataRows.forEach((dataRow) => {
        CAR_ATTRIBUTES.forEach((attribute) => {
          if (!dataRow[attribute]) {
            dataRowsToExclude.push(dataRow);
          }
        });
      });

      console.log(
        excelDataRows.filter((item) => !dataRowsToExclude.includes(item))
      );
    }
  };

  const loadData = (dataFile) => {
    var reader = new FileReader();
    reader.onload = function (e) {
      var data = e.target.result;
      let readedData = XLSX.read(data, { type: 'binary' });
      const wsname = readedData.SheetNames[0];
      const ws = readedData.Sheets[wsname];

      /* Convert array to json*/
      const dataParse = XLSX.utils.sheet_to_json(ws, { header: 2 });
      processData(dataParse);
    };
    reader.readAsBinaryString(dataFile);
  };

  if (!isLoggedIn) {
    return (
      <AdminLayout isLoggedIn={isLoggedIn}>
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
            <p>Welcome to Citizen Cars Admin Panel</p>
            <br />
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
                      if (response.role === 'admin') setIsLoggedIn(true);
                      else {
                        setNotification(
                          'You are not authorized to use this section'
                        );
                        setIsLoggedIn(false);
                      }
                      setIsLoading(false);
                    },
                    (error) => {
                      console.log(error);
                      setNotification(error);
                      setIsLoading(false);
                    }
                  );
                }}
              >
                {isLoading ? (
                  <i className="fa fa-spinner fa-spin"></i>
                ) : (
                  'Login'
                )}
              </button>
            </div>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout isLoggedIn={isLoggedIn} onOpenFile={loadData}>
      <div className="featured-car content-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ListView cars={data.cars} onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
      <InProgress isShow={isUploading} message="Uploading ..." />
    </AdminLayout>
  );
};

export default Admin;
