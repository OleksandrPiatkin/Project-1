import React, { Component } from 'react';

import TodoList from '../TodoList/TodoList';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import ItemAddForm from '../ItemAddForm/ItemAddForm';


export default class App extends Component {

    state = {
        todoData: [
            this.createTodoItem('Wake up'),
            this.createTodoItem('Make a coffe'),
            this.createTodoItem('Study kourses')
        ]
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: `${Date.now() + Math.floor(Math.random() * 100)}`
        }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {

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

        const newItem = this.createTodoItem(text);

        this.setState(({ todoData }) => {

            const newArr = [...todoData, newItem];

            return {
                todoData: newArr
            };
        });
    };

    onToggle = (arr, id, prop) => {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {
            ...oldItem,
            [prop]: !oldItem[prop]
        };

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    };

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.onToggle(todoData, id, 'important')
            };
        });
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.onToggle(todoData, id, 'done')
            };
        });
    };

    onSearchChange = (request) => {
        console.log(request);
        // search logic
    }

    render() {

        const doneCount = this.state.todoData
            .filter((el) => el.done).length;
        const todoCount = this.state.todoData
            .length - doneCount;

        return (
            <div className='container index-wrap'>
                <span>{(new Date()).toDateString()}</span>
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className='top-panel d-flex'>
                    <SearchPanel 
                        onSearchChange={this.onSearchChange} />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone} />
                <ItemAddForm addItem={this.addItem} />
            </div>
        );
    };
}