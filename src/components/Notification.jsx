const Notification = ({ children }) => {
  return (
    <div className="alert alert-danger alert-sm" role="alert">
      <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;
      {children}
    </div>
  );
};

export default Notification;
