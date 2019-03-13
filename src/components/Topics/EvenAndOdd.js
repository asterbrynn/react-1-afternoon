import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
//        this.evenOdd = this.evenOdd.bind(this);
    }
    updateState(val) {
        this.setState( {userInput: val} );
    }
    evenOdd(input) {
        const arr = input.split(",");
        let evens = [];
        let odds = [];
        arr.forEach(val => {
            if (val % 2 === 0) {
                evens.push(parseInt(val, 10));
            }
            else {
                odds.push(parseInt(val, 10));
            }
        })
        this.setState({ evenArray: evens, oddArray: odds });
    }
    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={ e => this.updateState(e.target.value)}/>
                <button className="confirmationButton" onClick={ () => {this.evenOdd(this.state.userInput)} } >Confirm</button>
                <span className="resultsBox">Evens: [{JSON.stringify(this.setState.evenArray)}]</span>
                <span className="resultsBox">Odds: [{JSON.stringify(this.setState.oddArray)}]</span>
            </div>
        )
    }
}
