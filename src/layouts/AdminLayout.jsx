const AdminLayout = ({ children, isLoggedIn = false, onOpenFile }) => {
  return (
    <>
      <header
        className="main-header header-fixed sticky-header"
        id="main-header-3"
      >
        <div className="container">
          <div className="header-inner bg-transparent">
            <nav className="d-flex justify-content-between navbar navbar-expand-lg bg-transparent">
              <img
                src="/assets/img/logos/logo-3.png"
                alt="Citizen Cars"
                className="logo-photo"
              />
              <ul className="navbar-nav">
                {isLoggedIn && (
                  <li className="nav-item">
                    <label
                      htmlFor="uploadData"
                      className="nav-link text-white bg-primary clickable"
                    >
                      Upload Data
                    </label>
                    <input
                      type="file"
                      id="uploadData"
                      className="d-none"
                      accept=".xls,.xlsx"
                      onChange={(e) => {
                        onOpenFile(e.target.files[0]);
                        e.target.value = null;
                      }}
                    />
                  </li>
                )}
                <li className="nav-item">
                  <h3 className="text-white">Admin Section</h3>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div style={{ backgroundColor: 'black', height: '130px' }}>&nbsp;</div>
      {children}
      <div className="container-fluid bg-grey text-center p-3">
        Copyright © 2023 Big XYZ
      </div>
    </>
  );
};

export default AdminLayout;
