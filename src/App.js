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
import ManageFood from './Pages/ManageFood/ManageFood';
import ContextProvider from './ContextProvider/ContextProvider';
import Purches from './Pages/Puuches/Purches';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';


const App = () => {
  return (
    <ContextProvider>
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
          <PrivateRoute path="/purches">
            <Purches />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ContextProvider>
  );
};

export default App;