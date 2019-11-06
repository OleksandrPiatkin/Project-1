import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
 
    render() {
        const { addItem } = this.props;

        return (
            <div className='item-add-form d-flex'>
                <input className='add-form-input'></input>
                
                <button type='button'
                    onClick={ addItem }
                    className='btn btn-secondary m-1'>Add</button>
            </div>
        )
    }
}