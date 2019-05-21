import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: "",
            palindrome: ""
        }
    }
    handleChange = val => {
        this.setState({
            userInput: val
        })
    }
    palinChecker = input => {
        if (input === input.split("").reverse().join("")) {
            this.setState({palindrome: "true"});
        }
        else {
            this.setState({palindrome: "false"});
        }
    }
    render() {
        return (
            <div className="puzzleBox palindromePB">
                <h4>Palindrome</h4>
                <input type="text" className="inputLine"
                    onChange={e => this.handleChange(e.target.value)}
                    />
                <button className="confirmationButton" onClick={
                    () => this.palinChecker(this.state.userInput)
                }>Confirm</button>
                <span className="resultsBox">
                    Palindrome: {this.state.palindrome}
                </span>
            </div>
        )
    }
}
