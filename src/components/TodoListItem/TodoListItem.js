import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    constructor() {
        super();

        this.state = {
            done: false,
            important: false
        };

        this.onLabelClick = () => {
            this.setState(({done}) => {
                return {
                    done: !done
                };
            });
        };
        this.onMarkImportant = () => {
            this.setState(({important}) => {
                return {
                    important: !important
                };
            });
        };
    }; 

    render () {
        const { label, onDeleted } = this.props;
        const { done, important } = this.state;

        let classNames = 'todo-list-item d-flex justify-content-between';
        if (done) {
            classNames += ' done';
        };
        if (important) {
            classNames += ' important';
        }

        return (
            <span className={classNames}>
                <span 
                    className='todo-list-item-label'
                    onClick={ this.onLabelClick }>
                { label }
                </span>
        
                <div>
                    <button type='button'
                            className='btn btn-outline-succes btn-sm'
                            onClick={this.onMarkImportant}>                            
                        <i className='fa fa-exclamation'/>
                    </button>
        
                    <button type='button'
                            className='btn btn-outline-succes btn-sm'
                            onClick={onDeleted}>
                        <i className='fa fa-trash-o'/>
                    </button>
                </div>
            </span>
            );
    };
};