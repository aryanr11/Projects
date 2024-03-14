
//  - - - - - - - - - - - - - - - - - - - - - -   Garage API CRUD IN REACT


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "~slick-carousel/slick/slick.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Signup from './Garage-API/Technician/Signup';
import Header from './Garage-API/Header';

import Vehical from './Garage-API/Vehical';
import Login from './Garage-API/Technician/Login';
import Home from './Garage-API/Home';
import Csignup from './Garage-API/Customer/Csignup';
import Clogin from './Garage-API/Customer/Clogin';
import Appointment from './Garage-API/Appointment';
import Technician from './Garage-API/Technician/Technician';
import Service from './Garage-API/Technician/Service';
import Invoice from './Garage-API/Invoice';
import Cprotect from './Garage-API/protector/Cprotect';
import Footer from './Garage-API/Footer';
import About from './Garage-API/About';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>

          {/* home page */}
          <Route exact path="/">
            <Home></Home>
          </Route>


          {/* technician page */}
          <Route path="/technician">
            <Technician></Technician>
          </Route>

          <Route path="/technician-signup">
            <Signup></Signup>
          </Route>

          <Route path="/technician-login">
            <Login></Login>
          </Route>

          {/* serivce page */}
          <Route path="/service">
            <Service></Service>
          </Route>


          {/* customer page*/}
          <Route path="/customer-signup">
            <Csignup></Csignup>
          </Route>

          <Route path="/customer-login">
            <Clogin></Clogin>
          </Route>


          {/* vehical page */}
          <Route path="/vehical">
            <Cprotect>
              <Vehical></Vehical>
            </Cprotect>
          </Route>


          {/* appoinment page */}
          <Route path="/appoinment">
            <Appointment></Appointment>
          </Route>

          {/* invoice page */}
          <Route path="/invoice">
            <Invoice></Invoice>
          </Route>

          <Route path="/about-us">
            <About></About>
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div >
  );

}
export default App;


// https://preview.themeforest.net/item/carex-car-repair-auto-service-template/full_screen_preview/48668937?_ga=2.203536663.625583990.1709869595-144147480.1708001137



// --------------------------- API RUN

// Tech login  ->  technicain page -> add Service -> service -> Home add card click -> customer login -> vehical -> appointment -> home

//  Appointment -> technicain page  card appointment no -> appoinment card click -> invoice -> home. 