import { forwardRef } from "react";
import { Link } from "react-router-dom";

const Header = forwardRef((props, ref) => (
  <header
    className="main-header header-fixed sticky-header"
    id="main-header-3"
    ref={ref}
  >
    <div className="container">
      <div className="header-inner bg-transparent">
        <nav className="d-flex justify-content-between navbar navbar-expand-lg bg-transparent">
          <Link to="/">
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
              <Link className="nav-link text-white bg-primary" to="/cars">
                Our Collection
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link bg-light b-0" to="/signin">
                Login
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="javascript;"
                  >
                    <i className="fa-solid fa-heart"></i>&nbsp;
                    <label className="clickable">My Wish List</label>
                  </a>
                </li>
                <li>
                  <hr />
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="javascript;"
                  >
                    <i class="fa-solid fa-circle-info"></i>&nbsp;
                    <label className="clickable">Help</label>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="javascript;"
                  >
                    <i class="fa-solid fa-arrow-right-from-bracket"></i>&nbsp;
                    <label className="clickable">Sign out</label>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
));

Header.displayName = "Header";
export default Header;
