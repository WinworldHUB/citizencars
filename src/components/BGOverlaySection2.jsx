import React from 'react';
import { useMediaQuery } from 'react-responsive';

const BGOverlaySection2 = React.forwardRef((props, ref) => {
  const isMobile = useMediaQuery({ query: '(max-width: 760px)' });

  const { children, overlayColor = 'primary' } = props;
  return (
    <div
      className="advantages-3"
      ref={ref}
      style={{
        height: 'auto',
        backgroundSize: 'cover',
        width: '100%',
        padding: '100px 0 70px',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        minHeight: isMobile ? '1400px' : '700px',
      }}
    >
      <div className={`overlay-${overlayColor}  d-flex align-items-center`}>
        {children}
      </div>
    </div>
  );
});

BGOverlaySection2.displayName = 'BGOverlaySection2';
export default BGOverlaySection2;
