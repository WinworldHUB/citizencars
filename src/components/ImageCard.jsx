import React from "react";
import { Link } from "react-router-dom";

const ImageCard = React.forwardRef((props, ref) => {
  const { pic, title, subTitle } = props;
  return (
    <div className="h-100" ref={ref} style={{ position: "relative" }}>
      <div
        className="d-flex justify-content-center align-items-center text-primary"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: '15px', width: '20px', height: '20px', position: "absolute", right: 5, top: 5, padding: '10px' }}
      >
        <i class="fa-solid fa-heart"></i>
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url(${pic})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          height: "300px",
        }}
      >
        &nbsp;
      </div>

      <div className="info border-primary border-top pt-3">
        <h5>
          <Link to="/about">{title}</Link>
        </h5>
        <p className="text-uppercase text-muted text-sm">{subTitle}</p>
      </div>
    </div>
  );
});

ImageCard.displayName = "ImageCard";
export default ImageCard;
