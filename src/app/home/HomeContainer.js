import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchStoreDetails, fetchStoreSpotlight } from './duck/operations';
import { setTag } from './duck/actions';
import { fetchProducts } from '../product/duck/actions';
import { Helmet } from "react-helmet";

import Header from './components/Header';
import Spotlights from './components/Spotlight'
import { ProductList } from './components/HomeProducts'
import { TagFilter } from './components/Tags'


class HomeContainer extends Component{
  componentDidMount() {
    if(
      (!this.props.store.isFetching && !this.props.store.data) &&
      (!this.props.spotlight.isFetching && !this.props.spotlight.data)
    ){
      this.props.fetchStoreDetails()
      this.props.fetchStoreSpotlight()
      this.props.fetchProducts()
    }
  }

  render() {
    const {
      store, product, spotlight, selectedTag, setTag
    } = this.props

    let helmetRender=<></>, headerRender=<></>, tagBarRender=<></>;
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
          setTag={setTag}
          tags={store.data.tags}
          buttonColor={store.data.style.themeColor}
          activeTag={selectedTag}
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
        <ProductList
          products={product.items}
          selectedTag={selectedTag}
        />
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
  const { store, spotlight, product, selectedTag } = state;
  return {
    store, product, spotlight, selectedTag 
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStoreDetails: () => dispatch(fetchStoreDetails()),
    fetchStoreSpotlight: () => dispatch(fetchStoreSpotlight()),
    fetchProducts: () => dispatch(fetchProducts()),
    setTag: (tag) => dispatch(setTag(tag))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);