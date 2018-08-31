import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
library.add(faShoppingCart)
library.add(faSearch)

import '../assets/stylesheets/base/bootstrap.scss';
import '../assets/stylesheets/components/App.scss';

import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
              <Header />
              <div className='container'>

                  <Switch>
                      <Route path="/" exact component={HomePage} />
                  </Switch>
              </div>
            </React.Fragment>
        );
    }
}

export default App;
