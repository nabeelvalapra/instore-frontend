import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchStoreDetails, fetchStoreSpotlight } from './duck/operations';
import { setTagFilter } from './duck/actions';
import { fetchProducts } from '../product/duck/actions';
import { Helmet } from "react-helmet";

import Header from './components/Header';
import Spotlights from './components/Spotlight'
import { TagFilter, ProductList } from './components/ProductTab'


class HomeContainer extends Component{
  componentDidMount() {
    if(!this.props.store.isFetching && !this.props.store.data){
      this.props.fetchStoreDetails()
      this.props.fetchStoreSpotlight()
      this.props.fetchProducts()
    }
  }

  render() {
    const {
      store, product, spotlight, tagFilter, setTagFilter
    } = this.props

    let helmetRender=<></>, headerRender, tagBarRender=<></>;
    if(!store.isFetching && store.data){
      helmetRender = (
        <Helmet>
          <title>{store.data.name}</title>
          <link rel="icon" href={store.data.style.logo} />
        </Helmet>
      )
      headerRender = (
        <Header
          backgroundColor={store.data.style.themeColor}
          logo={store.data.style.logo}
        />
      )
      tagBarRender = (
        <TagFilter
          setTagFilter={setTagFilter}
          buttonColor={store.data.style.themeColor}
          activeTag={tagFilter}
        />
      )
    } else if (!store.isFetching && !store.error) {
      headerRender = <p>Fetching store details...</p>  
    } else {
      headerRender = <p>{store.error}</p>
    }

    let spotlightRender;
    if(!spotlight.isFetching && spotlight.images){
      spotlightRender = <Spotlights spotlights={spotlight.images}/>
    } else if (!spotlight.isFetching && !spotlight.images) {
      spotlightRender = <p>Fetching spotlight details...</p>
    } else {
      spotlightRender = <p>{ spotlight.error }</p>
    }

    let productRender;
    if(!product.isFetching && product.items){
      productRender = (
        <>
          <ProductList
            products={product.items}
            tagFilter={tagFilter}
          />
        </>
      )
    } else if (!product.isFetching && !product.items){
      productRender = <p>Fetching product details ...</p>
    } else {
      productRender = <p>{ product.error }</p>
    }

    return (
      <>
        {helmetRender}
        {headerRender}
		 	  <section id="content">
          { spotlightRender }
          { tagBarRender }
          { productRender }
        </section>
      </>
    )
  }
}

const mapStateToProps = state => {
  const { store, spotlight, product, tagFilter } = state;
  return {
    store, product, spotlight, tagFilter
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStoreDetails: () => dispatch(fetchStoreDetails()),
    fetchStoreSpotlight: () => dispatch(fetchStoreSpotlight()),
    fetchProducts: () => dispatch(fetchProducts()),
    setTagFilter: (tag) => dispatch(setTagFilter(tag))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);