import React from 'react';

class FindFlights extends React.Component{

    handleSubmit(e){
        this.props.history.push('displayFlights/'+this.from+'/'+this.to+'/'+this.departureDate)
    }

    render(){
        return (<div>

            <h2>Find Flights:</h2>
            <form>
                From:<input type="text" name="from" onChange={(e)=>{this.from=e.target.value}}/>
                To:<input type="text" name="to" onChange={(e)=>{this.to=e.target.value}}/>
                Departure Date:<input type="text" name="departureDate" onChange={(e)=>{this.departureDate=e.target.value}}/>
                <button onClick={this.handleSubmit.bind(this)}>Search</button>
            </form>

        </div>)
    }
}

export default FindFlights;