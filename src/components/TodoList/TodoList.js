import React from 'react';
import './todo-list.css';

import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ( {todos, onDeleted, onToggleImportant, onToggleDone} ) => {

    const elements = todos.map((item) => {

        const { id, ...itemProps } = item;

        return (
            <li key={id} className='list-group-item'>
                <TodoListItem 
                    { ...itemProps } 
                    onDeleted={ () => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)} />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;