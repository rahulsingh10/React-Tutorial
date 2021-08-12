import React from "react";
import {Link} from 'react-router-dom';

class RowCreator extends React.Component{
    render(){
        var flight = this.props.item;
        return <tr>
            <td>{flight.operatingAirlines}</td>
            <td>{flight.departureCity}</td>
            <td>{flight.arrivalCity}</td>
            <td>{flight.estimatedDepartureTime}</td>
            <td><Link to={'/passengerDetails/'+flight.id}>Select</Link></td>
        </tr>
    }
}

export default RowCreator;