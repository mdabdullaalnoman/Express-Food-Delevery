import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import AddFood from './Pages/AddFood/AddFood';
import MyOrder from './Pages/MyOrder/MyOrder';
import Login from './Pages/Login/Login';
import firebaseInit from './firebase/firebaseinit';
import ManageFood from './Pages/ManageFood/ManageFood';

firebaseInit();

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/addFood">
          <AddFood />
        </Route>
        <Route path="/myOrder">
          <MyOrder />
        </Route>
        <Route path="/manageFood">
          <ManageFood />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;