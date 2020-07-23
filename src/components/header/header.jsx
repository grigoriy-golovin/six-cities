import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const Header = (props) => {
  const {isAuthorization} = props;
  return <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <a className="header__logo-link" href="main.html">
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
          </a>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile"
                to={isAuthorization ? `/favorites` : `/login`}
              >
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                {isAuthorization
                  ?
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  :
                  <span className="header__login">Sign in</span>
                }
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>;
};

Header.propTypes = {
  isAuthorization: PropTypes.bool.isRequired,
};

const mapStsteToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorization: state.isAuthorization,
});

export {Header};
export default connect(mapStsteToProps)(Header);
