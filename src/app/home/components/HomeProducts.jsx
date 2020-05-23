import React, { Component } from "react";
import { Link } from 'react-router-dom';

import '../../../assets/css/bootstrap.min.css';
import '../../../assets/css/style.css';


export class Product extends Component {
  render() {
    const product = this.props.product;
    return (
      <div className="product col-xs-6">
        <div className="img_cover">
          <Link to={`/product/${product.slug}/`}>
            <img src={product.image} alt="" />
          </Link>
          <span className="add_w_list" />
        </div>
        <div className="head">
          <Link to={`/product/${product.slug}/`} className="title">
            <b>{ product.name }</b>
						<span>Full Leng Shirt</span>
						<small className="price">{/*<del>500</del>*/}Rs { product.price }</small>
          </Link>
        </div>
      </div>
    )
  }
}


export class ProductList extends Component{
  render() {
    const products = Object.values(this.props.products).filter(
      prod => prod.tag === this.props.selectedTag
    );
    return (
      <div className="tab-content">
        <div id="popular" className="products_list">
          <div className="container p0">
            <div className="row">
              {products.map((product) => {
                return <Product key={product.id} product={product} />
               })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
