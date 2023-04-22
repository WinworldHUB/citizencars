import React from 'react';
import { Link } from 'react-router-dom';

const GridTile = React.forwardRef((props, ref) => {
  const {
    Pics,
    isFeatured,
    brand,
    Price,
    buildYear,
    totalRun,
    transmission,
    onClick,
  } = props;
  return (
    <div className="col-lg-6 col-md-6">
      <div className="car-box" ref={ref}>
        <div className="photo-thumbnail">
          <div className="photo">
            <img
              className="d-block w-100"
              src={`/assets/img/cars/${Pics}`}
              alt="car"
            />
            <Link onClick={onClick}>
              <i class="fa-regular fa-eye"></i>
            </Link>
          </div>
          {isFeatured && <div className="tag">Featured</div>}
        </div>
        <div className="detail">
          <div className="top">
            <h1>
              <Link onClick={onClick}>{brand}</Link>
              <span>{Price ?? 0}</span>
            </h1>
            <p>
              Build year: <span>{buildYear}</span>
            </p>
          </div>
          <div className="footer">
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

GridTile.displayName = 'GridTile';
export default GridTile;
