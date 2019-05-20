import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: [
                {
                    name: "Aidan",
                    pronouns: "he/him",
                    birthday: "24 May",
                },
                {
                    name: "James",
                    pronouns: "she/him",
                    birthday: "26 September",
                },
                {
                    name: "Murphy",
                    pronouns: "they/them",
                    birthday: "6 May",
                },
            ],
            userInput: "",
            filteredArray: []
        }
    }
    handleChange = val => {
        this.setState({
            userInput: val
        })
    }
    filterObject = input => {
        const arr = this.state.unFilteredArray;
        let filtered = [];
        arr.forEach(val => {
            if (val.hasOwnProperty(input)) {
                filtered.push(val);
            }
        })
        this.setState({filteredArray: filtered})
    }
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">
                    Unfiltered: {JSON.stringify(this.state.unFilteredArray, null, 10)}
                </span>
                <input type="text" className="inputLine"
                    onChange={e => this.handleChange(e.target.value)}
                    />
                <button className="confirmationButton" onClick={
                    () => this.filterObject(this.state.userInput)
                }>Confirm</button>
                <span className="resultsBox filterObjectRB">
                    Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}
                </span>
            </div>
        )
    }
}
