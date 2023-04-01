import React from "react";

const ListTile = React.forwardRef(
  ({
    pic,
    isFeatured,
    name,
    price,
    buildYear,
    totalRun,
    transmission,
    ref,
  }) => {
    return (
      <div class="car-box-2">
        <div class="row g-0">
          <div class="col-lg-5 col-md-5">
            <div class="car-thumbnail">
              <a href="car-details.html" class="car-img">
                {isFeatured && <div class="tag">Featured</div>}
                <div class="price-box-2">
                  { price}
                </div>
                <img class="d-block w-100" src={ pic} alt="car" />
              </a>
            </div>
          </div>
          <div class="col-lg-7 col-md-7 align-self-center">
            <div class="detail">
              <h3 class="title">
                <a href="car-details.html">{ name}</a>
              </h3>
              <ul class="facilities-list clearfix">
                <li>
                  <i class="flaticon-way"></i> { totalRun}
                </li>
                <li>
                  <i class="flaticon-manual-transmission"></i> { transmission}
                </li>
                <li>
                  <i class="flaticon-calendar-1"></i> {buildYear}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ListTile.displayName = "ListTile";
export default ListTile;
