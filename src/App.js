import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Component/Login/Login';
import Blog from './Component/Blog/Blog';
import Destination from './Component/Destination/Destination';
import News from './Component/News/News';
import Contact from './Component/Contact/Contact';
import Home from './Component/Home/Home';
import PlaceDetail from './Component/PlaceDetail/PlaceDetail';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Booking from './Component/Booking/Booking';
import NotFound from './Component/NotFound/NotFound';
import Map from './Component/Map/Map';
import ShowBooking from './Component/ShowBooking/ShowBooking';
export const UserContext = createContext();

function App() {
  const [logged, setLogged] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[logged, setLogged]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/place/:key">
              <PlaceDetail></PlaceDetail>
            </Route>
            <Route path="/news">
              <News></News>
            </Route>
            <Route path="/destination">
              <Destination></Destination>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/bookings">
              <ShowBooking></ShowBooking>
            </PrivateRoute>
            <PrivateRoute path="/booking/:key/:start/:end">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
