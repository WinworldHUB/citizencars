import React, { useState } from "react";
import { Link } from "react-router-dom";
import GridTile from "./GridTile";
import ListTile from "./ListTile";

const ListView = React.forwardRef((props, ref) => {
  const { cars, onClick } = props;
  const [isList, setIsList] = useState(true);

  return (
    <>
      <div className="option-bar clearfix" ref={ref}>
        <div className="sorting-options2">
          <span className="sort">Sort by:</span>
          <select className="selectpicker search-fields" name="default-order">
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
              isList && "active-view-btn"
            }`}
            onClick={() => setIsList(true)}
          >
            <i className="fa fa-th-list"></i>
          </Link>
          <Link
            className={`change-view-btn clickable ${
              !isList && "active-view-btn"
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
            <GridTile {...car} key={index} onClick={(e) => onClick(e, index)} />
          ))}
        </div>
      ) : (
        <>
          {cars.map((car, index) => (
            <ListTile {...car} key={index} onClick={(e) => onClick(e, index)} />
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

ListView.displayName = "ListView";

export default ListView;
