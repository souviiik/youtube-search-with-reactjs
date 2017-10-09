import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {term: ''};
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor="search">Search</label>
                <input 
                id="search"
                className="form-control"
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
           </div>
        )
    }
}
