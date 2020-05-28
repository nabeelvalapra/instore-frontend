import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStoreDetails } from '../home/duck/operations';
import ProductDetail from './ProductDetail'
import { fetchProducts } from './duck/actions';
import Header from '../home/components/Header'

class ProductContainer extends Component{
    componentDidMount() {
      const { productSlug, productIsFetching, products, fetchProducts, fetchStoreDetails } = this.props
      if(!productIsFetching && !products){
        fetchStoreDetails()
        fetchProducts(productSlug)
      }
    }

    render() {
      const { productSlug, productIsFetching, products, store } = this.props
      const product = (products ? products[productSlug] : null)

      return (
        <>
          {(!productIsFetching && product && store.data)
            ? (
              <>
              <Header
                backgroundColor={store.data.style.themeColor}
                logo={store.data.style.logo}
              />
              <ProductDetail product={product} themeColor={store.data.style.themeColor}/>
              </>
            )
            : <p>Fetching products ...</p>
          }
        </>
      )
    }
}

const mapStateToProps = (state, ownProps) => {
  const productSlug = ownProps.match.params.slug;
  const productIsFetching = state.product.isFetching;
  const products = state.product.items;
  const store = state.store;
  return { productSlug, productIsFetching, products, store }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStoreDetails: () => dispatch(fetchStoreDetails()),
    fetchProducts: (productId) => dispatch(fetchProducts(productId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);