import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  deleteStore,
  eraseCookie,
  TOKEN,
  USER_LOGIN,
} from "../../utils/config";

const Template = () => {
  const { userLogin } = useSelector((state) => state.userReducer);
  const {spGioHang} = useSelector(state => state.productReducer)
  const signOut = () => {
    deleteStore(USER_LOGIN);
    eraseCookie(TOKEN);

    window.location.reload();
  };
  const renderLogin = () => {
    if (userLogin) {
      return (
        // <NavLink className="text-white mt-2" to="profile">
        //   {userLogin.email}
        // </NavLink>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle mb-2 text-light"
            data-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {userLogin.email || userLogin.name}
          </a>
          <div className="dropdown-menu">
            <NavLink className="dropdown-item" to="/profile">
              Profile
            </NavLink>
            <div className="dropdown-divider"></div>

            <button
              className="dropdown-item "
              onClick={() => {
                signOut();
              }}
            >
              Sign-out
            </button>
          </div>
        </li>
      );
    }
    return (
      <div className="d-flex">
        <span>
          <NavLink to="login" id="btnLogin">
            Login
          </NavLink>
        </span>
        <span>
          <NavLink to="register" id="btnRegister">
            Register
          </NavLink>
        </span>
      </div>
    );
  };

  //Component return
  return (
    <div>
      <header>
        <div className="header__wrap">
          <div className="header__content d-flex justify-content-between align-items-center">
            <div className="header__logo">
              <NavLink to="">
                <img src="./img/image 3.png" alt="logoCybersoft" />
              </NavLink>
            </div>
            <div className="header__feature d-flex align-items-center">
              <NavLink to="/carts" className="d-flex align-items-center">
                <i
                  className="fa fa-shopping-cart"
                  style={{ cursor: "pointer", fontSize: "10px !important" }}
                />
                <span id="item_count">({spGioHang?.length})</span>
              </NavLink>

              {renderLogin()}
            </div>
          </div>
        </div>
      </header>
      {/* NAV */}
      <section className="navigation">
        <div className="navigation__wrap">
          <ul className="nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home" id="btnHome">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/search"
                id="search"
                value="men"
              >
                Search
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
      <Outlet />

      <footer>
        <div className="footer__wrap mx-auto">
          <div className="row container mx-auto">
            <div className="footer__link footer__help col-md-4 ">
              <h3>GET HELP</h3>
              <ul className="list-unstyled">
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="#">Nike</NavLink>
                </li>
                <li>
                  <NavLink to="#">Adidas</NavLink>
                </li>
                <li>
                  <NavLink to="#">Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="footer__link footer__support col-md-4 ">
              <h3>SUPPORT</h3>
              <ul className="list-unstyled">
                <li>
                  <NavLink to="#">About</NavLink>
                </li>
                <li>
                  <NavLink to="#">Contact</NavLink>
                </li>
                <li>
                  <NavLink to="#">Help</NavLink>
                </li>
                <li>
                  <NavLink to="#">Phone</NavLink>
                </li>
              </ul>
            </div>
            <div className="footer__link footer__register col-md-4 ">
              <h3>REGISTER</h3>
              <ul className="list-unstyled">
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__credit py-4">
          <p className="text-center m-0">
            © 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn
            Khải.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Template;
