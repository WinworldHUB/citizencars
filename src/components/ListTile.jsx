import React from "react";
import { Link } from "react-router-dom";

const ListTile = React.forwardRef((props, ref) => {
  const { Pics, isFeatured, name, Price, buildYear, totalRun, transmission, onClick } =
    props;
  return (
    <div className="car-box-2">
      <div className="row g-0">
        <div className="col-lg-5 col-md-5">
          <div className="car-thumbnail">
            <Link className="car-img" onClick={onClick}>
              {isFeatured && <div className="tag">Featured</div>}
              <div className="price-box-2">{Price ?? 0}</div>
              
              <img
                className="d-block w-100"
                src={`/assets/img/cars/${Pics}`}
                alt="car"
              />
            </Link>
          </div>
        </div>
        <div className="col-lg-7 col-md-7 align-self-center">
          <div className="detail">
            <h3 className="title">
              <Link onClick={onClick}>{name}</Link>
            </h3>
            <ul className="facilities-list clearfix">
              <li>
                <i className="flaticon-way"></i> {totalRun}
              </li>
              <li>
                <i className="flaticon-manual-transmission"></i> {transmission}
              </li>
              <li>
                <i className="flaticon-calendar-1"></i> {buildYear}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});

ListTile.displayName = "ListTile";
export default ListTile;
