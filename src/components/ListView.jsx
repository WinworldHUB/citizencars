import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GridTile from './GridTile';
import ListTile from './ListTile';
import numeral from 'numeral';

const ListView = React.forwardRef((props, ref) => {
  const { cars, onClick } = props;
  const [isList, setIsList] = useState(true);

  console.log(cars);

  return (
    <>
      <div className="option-bar clearfix" ref={ref}>
        <div className="sorting-options2 row">
          <span className="sort col-4">Sort by:</span>
          <select className="form-control col" name="default-order">
            <option>Default Order</option>
            <option>Price High to Low</option>
            <option>Price: Low to High</option>
            <option>Newest Properties</option>
            <option>Oldest Properties</option>
          </select>
        </div>
        <div className="sorting-options float-right">
          <Link
            className={`change-view-btn clickable ${
              isList && 'active-view-btn'
            }`}
            onClick={() => setIsList(true)}
          >
            <i className="fa fa-th-list"></i>
          </Link>
          <Link
            className={`change-view-btn clickable ${
              !isList && 'active-view-btn'
            }`}
            onClick={() => setIsList(false)}
          >
            <i className="fa fa-th-large"></i>
          </Link>
        </div>
      </div>
      {isList === false ? (
        <div className="row">
          {cars.map((car, index) => (
            <GridTile
              name={car.brand}
              buildYear={car['Registered In']}
              totalRun={car['Kilometer Driven']}
              transmission={car['TransmissionType']}
              Price={numeral(car['Price']).format('$ 0,0.00')}
              Pics={Array.from(car.Pics?.split('\n') ?? '')[0]}
              key={index}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClick(car['Sr. No.']);
              }}
            />
          ))}
        </div>
      ) : (
        <>
          {cars.map((car, index) => (
            <ListTile
              name={car.brand}
              buildYear={car['Registered In']}
              totalRun={car['Kilometer Driven']}
              transmission={car['TransmissionType']}
              Price={numeral(car['Price']).format('$ 0,0.00')}
              key={index}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClick(car['Sr. No.']);
              }}
              Pics={Array.from(car.Pics?.split('\n') ?? '')[0]}
            />
          ))}
        </>
      )}
      {/* <div className="pagination-box text-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="javascript;">
                <i className="fa fa-angle-left"></i>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link active" href="javascript;">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="javascript;">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="javascript;">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="javascript;">
                <i className="fa fa-angle-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div> */}
    </>
  );
});

ListView.displayName = 'ListView';

export default ListView;
