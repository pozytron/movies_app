import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import store from "./redux/store";
import { Provider } from "react-redux";
import Search from "./components/Search";

const Navigation = ()=>(
  <nav>
                <ul>
                  <li><Link to="/">Wyszukiwarka</Link></li>
                  <li><Link to="/favourites">Obejrzane</Link></li>
                  <li><Link to="/todo">Do obejrzenia</Link></li>
                </ul>
              </nav>
)
class Main extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <HashRouter>
            <div>
              <Navigation />
              <Switch>
                <Route path='/:price?' component={Search} />
              </Switch>
            </div>
          </HashRouter>
        </Provider>
      </div>
    );
  }
}

export default Main;
