import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import store from "./redux/store";
import { Provider } from "react-redux";

import Home from "./components/Home";
import Favourites from "./components/Favourites";
import MustWatch from "./components/MustWatch";
import Movie from "./components/Movie";

const Navigation = ()=>(
  <nav>
                <ul>
                  <li><Link to="/">Wyszukiwarka</Link></li>
                  <li><Link to="/favourites">Obejrzane</Link></li>
                  <li><Link to="/mustwatch">Do obejrzenia</Link></li>
                  <li><Link to="/movie/10">Test Movie 10</Link></li>
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
                <Route exact path='/' component={Home} />
                <Route exact path='/favourites' component={Favourites} />
                <Route exact path='/mustwatch' component={MustWatch} />
                <Route exact path='/movie/:movieId?' component={Movie} />
              </Switch>
            </div>
          </HashRouter>
        </Provider>
      </div>
    );
  }
}

export default Main;
