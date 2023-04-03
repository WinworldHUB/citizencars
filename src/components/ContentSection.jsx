const ContentSection = (props) => {
  const { title1, title2, subTitle1, subTitle2, children } = props;

  return (
    <div className="featured-car content-area">
      <div className="container-fluid">
        <div className="text-center">
          <p className="display-6">
            {title1} <span className="text-red text-uppercase">{title2}</span>
          </p>
          <p className="display-6">
            {subTitle1}
            <span className="text-red text-bold text-uppercase">
              {subTitle2}
            </span>
          </p>
          <div className="title-border">
            <div className="title-border-inner"></div>
            <div className="title-border-inner"></div>
            <div className="title-border-inner"></div>
            <div className="title-border-inner"></div>
            <div className="title-border-inner"></div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ContentSection;
