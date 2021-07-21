import React, {Component} from 'react';

/*
id: 18939837, name: 'Leta', date: '12/3', time: '6:30', number: 2 }
*/


class Form extends Component {
    constructor(){
        super();
        this.state = {
            guestName:'',
            date:'',
            time:'',
            number:0,
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }


    render(){
        return(
            <form>
                <input
                    type='text'
                    placeholder='Type name here'
                    name='guestName'
                    value={this.state.guestName}
                    onChange={e => this.handleChange(e)}
                />

                <input
                    type="text"
                    placeholder='Select Date'
                    name='date'
                    value={this.state.date}
                    onChange={e => this.handleChange(e)}
                />


                {
                    //time
                }
                <input
                    type="text"
                    placeholder='Request a time'
                    name='time'
                    value={this.state.time}
                    onChange={e => this.handleChange(e)}
                />


                {
                    //number
                }
                <input
                    type="number"
                    placeholder='Type your party size'
                    name='number'
                    value={this.state.number}
                    onChange={e => this.handleChange(e)}
                />

                <button onClick={e => this.submitReservation(e)}> Make Reservation </button>
            </form>
        )
    }
}
export default Form;