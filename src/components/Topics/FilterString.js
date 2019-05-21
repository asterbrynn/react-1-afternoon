import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray: ["Aidan", "Murphy", "James", "Ellie", "Alex"],
            userInput: "",
            filteredArray: []
        }
    }
    handleChange = val => {
        this.setState({
            userInput: val
        })
    }
    filterString = input => {
        const arr = this.state.unFilteredArray;
        let filtered = [];
        arr.forEach(val => {
            if (val.toLowerCase().startsWith(input.toLowerCase())) {
                filtered.push(val);
            }
        })
        this.setState({filteredArray: filtered})
    }
    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">
                    Unfiltered: {JSON.stringify(this.state.unFilteredArray, null, 10)}
                </span>
                <input type="text" className="inputLine"
                    onChange={e => this.handleChange(e.target.value)}
                    />
                <button className="confirmationButton" onClick={
                    () => this.filterString(this.state.userInput)
                }>Confirm</button>
                <span className="resultsBox filterStringRB">
                    Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}
                </span>
            </div>
        )
    }
}
