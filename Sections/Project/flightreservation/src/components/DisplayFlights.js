import React from 'react';
import axios from 'axios';
import RowCreator from './RowCreator';

class DisplayFlights extends React.Component{
    state = {
        flightData:[]
    }

    componentWillMount(){
        axios.get('http://localhost:8080/flightservices/flights?from='+this.props.match.params.from+
        '&to='+this.props.match.params.to+
        '&departureDate='+this.props.match.params.departureDate).then(res=>{
            const flightData = res.data;
            this.setState({flightData})
        })
    }

    render(){
        return (<div>
            <h2>Flights:</h2>
            <table>
                <thead>
                    <th>Airlines</th>
                    <th>Departure City</th>
                    <th>Arrival City</th>
                    <th>Departure Date and Time</th>
                </thead>
                <tbody>
                    {this.state.flightData.map(flight=><RowCreator item={flight}/>)}
                </tbody>
            </table>
        </div>)
    }
}

export default DisplayFlights;