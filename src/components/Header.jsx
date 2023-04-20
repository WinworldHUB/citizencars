import { forwardRef, useContext } from 'react';
import { Link } from "react-router-dom";
import { LocalDataContext } from '../App';

const Header = forwardRef((props, ref) => {
  const { userId } = useContext(LocalDataContext);

  return (
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
                <Link className="nav-link text-white" to={'/about'}>
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
                  Wishlist
                </Link>
                {userId && (
                  <ul class="dropdown-menu">
                    <li>
                      <Link class="dropdown-item" to="/signout">
                        Logout
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";
export default Header;
