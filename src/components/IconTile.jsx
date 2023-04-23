const IconTile = (props) => {
  const { title, imgPath, icon, value } = props;
  return (
    <div className="d-flex align-items-center flex-column">
      {imgPath && <img src={imgPath} alt={title} />}
      {icon}
      <br />
      <span className="text-center text-primary text-bold">{title}</span>
      <span className="text-center text-muted">{value}</span>
    </div>
  );
};

export default IconTile;
