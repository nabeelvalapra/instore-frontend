import React, { Component } from "react";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import '../../../assets/css/bootstrap.min.css';
import '../../../assets/css/style.css';

class Header extends Component{
    render() {
      return (
        <>
          <header style={{background: this.props.backgroundColor}}>
            <div className="container">
              {/* <button id="menu_toggle">
                <i className="first" />
                <i className="middle" />
                <i className="last" />
              </button> */}
              <Link to="/" className="brand-name">
                <img src={this.props.logo} alt="logo" />
              </Link>
              <div className="right">
                {/* <a href="#" className="wishlist_link" /> */}
                {/* <a href="cart.html" className="cart_link" /> */}
              </div>
            </div>
          </header>
        </>
      )
    }
}

Header.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired
}
export default Header