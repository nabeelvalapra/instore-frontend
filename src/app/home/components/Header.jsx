import React, { Component } from "react";
import PropTypes from 'prop-types'

import '../../../assets/css/bootstrap.min.css';
import '../../../assets/css/style.css';

// class Menu extends Component{
//     render() {
//       return (
//         <div id="menu">
//           <ul>
//             {/*
//             <li><a href="#">Home</a></li>
//             <li><a href="#">Products</a></li>
//             <li><a href="#">Category</a></li>
//             <li><a href="#">Help</a></li>
//             <li><a href="#">Payments</a></li>
//             <li><a href="#">Shipping</a></li>
//             <li><a href="#">Cancellation &amp; Returns</a></li>
//             <li><a href="#">FAQ</a></li>
//             <li><a href="#">Report Infringement</a></li>
//             */}
//           </ul>
//         </div>
//       )
//     }
// }

class Header extends Component{
    render() {
      return (
        <>
          <header style={{background: this.props.backgroundColor}}>
            <div className="container">
              <button id="menu_toggle">
                <i className="first" />
                <i className="middle" />
                <i className="last" />
              </button>
              <a className="brand-name" href="index.html">
                <img src={this.props.logo} alt="logo" />
              </a>
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