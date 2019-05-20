import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: [],
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
        //
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
