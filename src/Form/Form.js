import React, {Component} from 'react';
import './Form.css'

/*
id: 18939837, name: 'Leta', date: '12/3', time: '6:30', number: 2 }
*/


class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            guestName:'',
            date:'',
            time:'',
            number:'',
        }
    }

    clearInputs = () => {
        this.setState(
            {   guestName:'',
                date:'',
                time:'',
                number:'',
            }
        )
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitReservation = e => {
        e.preventDefault();
        const newRes = {
            id: Date.now(),
            name: this.state.guestName,
            date: this.state.date,
            time: this.state.time,
            number: this.state.number,
        }
        this.props.addReservation(newRes);
        this.clearInputs();
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

                <input
                    type="text"
                    placeholder='Request a time'
                    name='time'
                    value={this.state.time}
                    onChange={e => this.handleChange(e)}
                />

                <input
                    type="text"
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