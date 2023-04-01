import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { getCurrency, ONE_CR, ONE_LAC } from "../utils";

const SideSearch = React.forwardRef((props, ref) => {
  const { direction = "left" } = props;
  const [values, setValues] = useState([20 * ONE_LAC, 40 * ONE_LAC]);
  const STEP = ONE_LAC;
  const MIN = 10 * ONE_LAC;
  const MAX = ONE_CR;

  return (
    <div className={`sidebar-${direction}`} ref={ref}>
      <div className="widget widget-3 advanced-search2">
        <h3 className="sidebar-title">Search Cars</h3>
        <div className="form-group">
          <select className="form-control" name="select-brand">
            <option>Select Brand</option>
            <option>Audi</option>
            <option>BMW</option>
            <option>Honda</option>
            <option>Nissan</option>
          </select>
        </div>
        <div className="form-group">
          <select className="form-control" name="select-make">
            <option>Select Make</option>
            <option>BMW</option>
            <option>Honda</option>
            <option>Lamborghini</option>
            <option>Sports Car</option>
          </select>
        </div>
        <div className="form-group">
          <select className="form-control" name="select-location">
            <option>Select Location</option>
            <option>United States</option>
            <option>United Kingdom</option>
          </select>
        </div>
        <div className="form-group">
          <select className="form-control" name="select-year">
            <option>Select Year</option>
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
          </select>
        </div>
        <div className="form-group">
          <select className="form-control" name="select-type">
            <option>Select Type Of Car</option>
            <option>New Car</option>
            <option>Used Car</option>
          </select>
        </div>
        <div className="range-slider clearfix">
          <label>Price</label>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Range
              values={values}
              step={STEP}
              min={MIN}
              max={MAX}
              onChange={(values) => {
                setValues(values);
              }}
              renderTrack={({ props, children }) => (
                <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  style={{
                    ...props.style,
                    height: "36px",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      height: "5px",
                      width: "100%",
                      borderRadius: "4px",
                      background: getTrackBackground({
                        values,
                        colors: ["#ccc", "red", "#ccc"],
                        min: MIN,
                        max: MAX,
                      }),
                      alignSelf: "center",
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ props, isDragged }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "42px",
                    width: "42px",
                    borderRadius: "4px",
                    backgroundColor: "#FFF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 2px 6px #AAA",
                  }}
                >
                  <div
                    style={{
                      height: "16px",
                      width: "5px",
                      backgroundColor: isDragged ? "red" : "#CCC",
                    }}
                  />
                </div>
              )}
            />
            <output style={{ marginTop: "30px" }} id="output">
              {getCurrency(values[0])} - {getCurrency(values[1])}
            </output>
          </div>
          <div className="clearfix"></div>
        </div>
        <div className="faq-info other-features">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Other Features
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <h3 className="sidebar-title">Brands</h3>
                  <div className="checkbox checkbox-theme checkbox-circle">
                    <input id="checkbox2" type="checkbox" />
                    <label htmlFor="checkbox2">Audi</label>
                  </div>
                  <div className="checkbox checkbox-theme checkbox-circle">
                    <input id="checkbox3" type="checkbox" />
                    <label htmlFor="checkbox3">BMW</label>
                  </div>
                  <div className="checkbox checkbox-theme checkbox-circle">
                    <input id="checkbox4" type="checkbox" />
                    <label htmlFor="checkbox4">Honda</label>
                  </div>
                  <div className="checkbox checkbox-theme checkbox-circle">
                    <input id="checkbox1" type="checkbox" />
                    <label htmlFor="checkbox1">Lamborghini</label>
                  </div>
                  <div className="checkbox checkbox-theme checkbox-circle">
                    <input id="checkbox5" type="checkbox" />
                    <label htmlFor="checkbox5">Toyota</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group mb-0">
          <button className="search-button btn">Search</button>
        </div>
      </div>
    </div>
  );
});

SideSearch.displayName = "SideSearch";
export default SideSearch;
