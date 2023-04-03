const IconTile = (props) => {
  const { title, imgPath } = props;
  return (
    <div className="d-flex align-items-center flex-column">
      <img src={imgPath} alt={title} />
      <p className="text-center text-primary">{title}</p>
    </div>
  );
};

export default IconTile;
