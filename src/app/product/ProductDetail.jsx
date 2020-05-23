import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/css/bootstrap.min.css'
import '../../assets/css/style.css'
import whatsappLogo from '../../assets/images/whatsapp.svg'

class ProductDetail extends Component{
    render() {
      let { product, themeColor } = this.props
      return (
        <>
	        <section className="wrapp">
	 	        <div className="right_content">
              <section id="content">
                <div id="spotlight">
                  <div className="inner_banner">
                    <div className="slider_wrap">
                      <div className="col">
                        <div className="imgcover">
                          <img src={product.image} alt=""/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product_details">
                  <div className="container">
                    <h2>{product.name}</h2>
                    <h6>Angle type double collered article</h6>
                    <div className="product_desc">
                      <h4>Product features</h4>
                      <ul>
                        <li>Collered angle type genuine leathe boots</li>
                        <li>Specially for bikers</li>
                        <li>Trecking guys, its designed by English</li>
                        <li>100% Genuine leather and threads</li>
                      </ul>
                    </div>
                    <div className="cart_section">
                      <div className="row">
                        {/* <div className="col-xs-7"> */}
                          {/* <form action> */}
                          {/* 
                            <span className="quatity_change">
                              <span className="minus">-</span>
                              <input
                                id="cart_quantity"
                                type="text"
                                defaultValue={1}
                                className="qty"
                              />
                              <span className="add">+</span>
                            </span>
                          */}
                          {/* </form> */}
                        {/* </div> */}
                        <div>
                          <span className="price" style={{color: themeColor}}>Price: Rs {product.price}</span>
                        </div>
                      </div>
                      {/*
                      <div className="buttons row">
                        <div className="col-xs-4">
                          <Link className="button2 icon" to="/">
                            <span className="wishlist_link" />
                          </Link>
                        </div>
                        {/* <div className="col-xs-8">
                          <a href className="button3">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                      */}
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="details_bottom">
					    <Link to="/" className="button5">
				 		    <img src={whatsappLogo} alt="whatsapp"/>
				 	    </Link>
				 	    <span className="button6">
			 			    Available
			 		    </span>
			 	    </div>
          </section>
        </>
      )
    }
}

export default ProductDetail;