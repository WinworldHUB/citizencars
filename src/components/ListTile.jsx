import React from "react";

const ListTile = React.forwardRef((props, ref) => {
  const { pic, isFeatured, name, price, buildYear, totalRun, transmission } =
    props;
  return (
    <div className="car-box-2">
      <div className="row g-0">
        <div className="col-lg-5 col-md-5">
          <div className="car-thumbnail">
            <a href="car-details.html" className="car-img">
              {isFeatured && <div className="tag">Featured</div>}
              <div className="price-box-2">{price}</div>
              <img className="d-block w-100" src={pic} alt="car" />
            </a>
          </div>
        </div>
        <div className="col-lg-7 col-md-7 align-self-center">
          <div className="detail">
            <h3 className="title">
              <a href="car-details.html">{name}</a>
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
