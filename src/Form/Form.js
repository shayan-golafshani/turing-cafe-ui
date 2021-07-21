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
            </form>
        )
    }
}
export default Form;