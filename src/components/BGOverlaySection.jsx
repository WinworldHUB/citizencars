import React from "react";

const BGOverlaySection = React.forwardRef((props, ref) => {
  const { children, overlayColor = 'primary' } = props;
  return (
    <div className="advantages-3" ref={ref} style={{ minHeight: "700px" }}>
      <div className={`overlay-${overlayColor}  d-flex align-items-center`}>
        {children}
      </div>
    </div>
  );
});

BGOverlaySection.displayName = "BGOverlaySection";
export default BGOverlaySection;
