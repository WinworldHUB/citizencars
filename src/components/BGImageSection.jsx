import React from "react";

const BGImageSection = React.forwardRef(({ alignItemsCenter, children, imgSrc, ref }) => {
  return (
    <div className="advantages-3" ref={ref} style={{ minHeight: "700px" }}>
      <div
        className={`bg-img ${alignItemsCenter && "d-flex align-items-center"}`}
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        {children}
      </div>
    </div>
  );
});

BGImageSection.displayName = "BGImageSection";
export default BGImageSection;
