import { Link } from "react-router-dom";

const Header = () => (
  <header className="main-header header-fixed sticky-header" id="main-header-3">
    <div className="container">
      <div className="header-inner bg-transparent">
        <nav className="d-flex justify-content-between navbar navbar-expand-lg bg-transparent">
          <Link to='/'>
            <img
              src="/assets/img/logos/logo-3.png"
              alt="Citizen Cars"
              className="logo-photo"
            />
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="javascript;">
                BUY: 99999999
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="javascript;">
                SELL: 99999999
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to={"/about"}>
                About us
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white bg-primary" href="javascript;">
                Our Collection
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link bg-light b-0" href="javascript;">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;