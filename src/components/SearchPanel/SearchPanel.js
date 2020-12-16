import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        label: ''
    };

    onSearchChange = (e) => {
        this.setState({
            label: e.target.value
        });
        this.props.onSearchChange(this.state.label);
    };

    render() {
        return (

            <input
                className='search-input'
                placeholder="search"
                onChange={this.onSearchChange}
                value={this.state.label} />
        )
    }
}