import React from 'react';

import './todoList.css';

import IconButton from '../iconButton';

const TodoList = (props) => {
    const renderRows = () => {
        const list = props.list || [];
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td className="d-flex">
                    <IconButton styleclass='success' icon='check' hide={todo.done} onClick={() => props.handleMarkAsDone(todo)} />
                    <IconButton styleclass='warning' icon='undo' hide={!todo.done} onClick={() => props.handleMarkAsPending(todo)} />
                    <IconButton styleclass='danger' icon='trash-o' hide={!todo.done} onClick={() => props.handleRemove(todo)} />
                </td>
            </tr>
        ));
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

export default TodoList;