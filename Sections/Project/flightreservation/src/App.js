import './App.css';
import {Route, Switch} from 'react-router-dom';
import FindFlights from './components/FindFlights';
import PassengerDetails from './components/PassengerDetails';
import DisplayFlights from './components/DisplayFlights';
import ConfirmReservation from './components/ConfirmReservation';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={FindFlights}/>
        <Route path="/displayFlights/:from/:to/:departureDate" component={DisplayFlights}/>
        <Route path="/PassengerDetails/:flightId" component={PassengerDetails}/>
        <Route path="/ConfirmReservation/:reservationId" component={ConfirmReservation}/>
      </Switch>
    </div>
  );
}

export default App;
