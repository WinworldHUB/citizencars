const HeadingWithBorder = (props) => {
  const { title, children } = props;

  return (
    <div className="d-flex justify-space-between border-2 border-start border-primary ps-3 flex-column">
      <h1 className="">{title}</h1>
      {children && <p>{children}</p>}
    </div>
  );
};

export default HeadingWithBorder;
