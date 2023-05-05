import React from 'react';

const BGImageSection2 = React.forwardRef((props, ref) => {
  const { children, imgSrc } = props;
  return (
    <div
      ref={ref}
      style={{
        background: `rgba(255, 255, 255, 0.04) url(${imgSrc}) center center repeat`,
        height: 'auto',
        backgroundSize: 'cover',
        width: '100%',
        padding: '100px 0 70px',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {children}
    </div>
  );
});

BGImageSection2.displayName = 'BGImageSection2';
export default BGImageSection2;
