import React from 'react';
import './App.css';
import Homepage from './pages/home';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainLayout from './components/main-layout';
import ProductPage from './pages/product';
import UserPage from './pages/user';

function App() {
  let LayoutRouter =(
    <MainLayout>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/product" component={ProductPage} />
          <Route exact path="/user" component={UserPage} />
          <Route exact path="/order" component={Homepage} />
          <Route component={Error} />
        </Switch>
      </MainLayout>
   );
  return (
    <div>
      <Router>
          <Switch>
            <Route render={props => LayoutRouter } />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
