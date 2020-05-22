import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import ScrollMemory from 'react-router-scroll-memory';

// import requireAuth from './common/requireAuth';
import HomeContainer from './home/HomeContainer';
import ProductContainer from './product/ProductContainer';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ConnectedRouter history={this.props.history}>
          <ScrollMemory/>
          <Switch>
            <Route exact path='/' component={HomeContainer} />
            {/* <Route path='/product/:productSlug/' component={requireAuth(ProductContainer)}/> */}
            <Route path='/product/:slug/' component={ProductContainer}/>
          </Switch>
        </ConnectedRouter>
      </React.Fragment>
    );
  }
}

export default App;