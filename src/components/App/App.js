import React, { Component } from 'react';

import TodoList from '../TodoList/TodoList';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import ItemAddForm from '../ItemAddForm/ItemAddForm';


export default class App extends Component {

    state = {
        todoData: [ 
            { label:'Wake up', important: true, id: 1 },
            { label:'Make a coffe', important: false, id: 2 },
            { label:'Study kourses', important: true, id: 3 },
        ]
    };

    deleteItem = (id) => {
        this.setState(({ todoData}) => {
            
            const idx = todoData.findIndex((el) => el.id === id);

            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1);

            const newArray = [...before, ...after];

            return {
                todoData: newArray
            };
        });
    };

    addItem = (text) => {
        
        console.log('lol');
    };

    render() {
        return (
            <div className='container index-wrap'>
                <span>{ (new Date()).toDateString() }</span>
                <AppHeader toDo={1} done={3}/>
                <div className='top-panel d-flex'>
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList 
                    todos={this.state.todoData}
                    onDeleted={ this.deleteItem }/>
                <ItemAddForm addItem={ this.addItem }/>
            </div>
         );
    };
}