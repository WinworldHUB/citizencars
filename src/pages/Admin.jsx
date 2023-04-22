import { useEffect, useState } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import Inputbox from '../elements/Inputbox';
import Notification from '../components/Notification';
import DBService from '../DBService';
import ListView from '../components/ListView';
import * as XLSX from 'xlsx';
import { CAR_ATTRIBUTES } from '../constants';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('admin@carz.com');
  const [password, setPassword] = useState('password@1');
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState('');
  //const [inProgress, setInProgress] = useState(false);
  const [inProgressMessage, setInProgressMessage] = useState('');
  const [cars, setCars] = useState(null);

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
        setInProgressMessage(err.data);
        setInProgressMessage('');
      }
    );
  };

  const processData = (dataFromExcel) => {
    if (dataFromExcel) {
      const excelDataRows = Array.from(dataFromExcel);
      const dataRowsToExclude = [];
      const output = { columns: [], values: [] };

      output.columns.push(...CAR_ATTRIBUTES);

      excelDataRows.forEach((dataRow) => {
        CAR_ATTRIBUTES.forEach((attribute) => {
          if (!dataRow[attribute]) {
            dataRowsToExclude.push(dataRow);
          }
        });
      });

      const qualifiedRows = excelDataRows.filter(
        (item) => !dataRowsToExclude.includes(item)
      );

      qualifiedRows.forEach((row) => {
        const rowValues = [];
        CAR_ATTRIBUTES.forEach((attribute) => {
          rowValues.push(row[attribute]);
        });
        output.values.push(rowValues);
      });

      DBService.uploadCars(
        output,
        (response) => {
          console.log(response);
          // setCars(response.values);
          // setInProgressMessage('');
          setInProgressMessage('Loading cars');
          getCars();
        },
        (err) => {
          setNotification(err.data);
          setInProgressMessage('');
        }
      );
    }
  };

  const loadData = (dataFile) => {
    setInProgressMessage('Uploading cars');
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

  useEffect(() => {
    if (isLoggedIn === true) {
      setInProgressMessage('Loading cars');
      getCars();
    }
  }, [isLoggedIn]);

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

  if (inProgressMessage !== '') {
    return (
      <AdminLayout isLoggedIn={isLoggedIn} onOpenFile={loadData}>
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
      </AdminLayout>
    );
  }

  return (
    <AdminLayout isLoggedIn={isLoggedIn} onOpenFile={loadData}>
      <div className="featured-car content-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {cars && <ListView cars={cars} onClick={() => {}} />}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Admin;
