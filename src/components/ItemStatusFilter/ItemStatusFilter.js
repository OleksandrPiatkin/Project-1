import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

    render() {
        return (
            <div className='btn-group m-1 item-status-filter'>
                <button type='button'
                    className='btn btn-info'>All</button>
                <button type='button'
                    className='btn btn-outline-secoundary border'>Active</button>
                <button type='button'
                    className='btn btn-outline-secoundary border'>Done</button>
            </div>
        );
    }
}
