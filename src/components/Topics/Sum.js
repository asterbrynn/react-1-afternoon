import React, { Component } from 'react';

export default class Sum extends Component {
    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    handleChange = e => {
        let {value, name} = e.target;
        console.log(name)
        this.setState({
            [name]: value
        })
    }
    sumNums = (num1, num2) => {
        const sum = num1 + num2;
        this.setState({sum: sum})
    }
    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input type="text" name="number1"
                    className="inputLine"
                    onChange={this.handleChange}/>
                <input type="text" name="number2"
                    className="inputLine"
                    onChange={this.handleChange}/>
                <button className="confirmationButton"
                    onClick={() => this.sumNums(
                        +this.state.number1, +this.state.number2
                    )}>Confirm</button>
                <span className="resultsBox">
                    Sum: {this.state.sum}
                </span>
            </div>
        )
    }
}
