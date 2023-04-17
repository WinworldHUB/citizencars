const IconTile = (props) => {
  const { title, imgPath } = props;
  return (
    <div className="d-flex align-items-center flex-column">
      <p className="text-center text-muted text-bold">{title}</p>
      <img src={imgPath} alt={title} />
      <p className="text-center text-primary">value</p>
    </div>
  );
};

export default IconTile;
