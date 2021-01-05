import React from 'react';

import './todo.css';

import PageHeader from '../../components/pageHeader';
import TodoForm from '../../components/todoForm';
import TodoList from '../../components/todoList';

const Todo = (props) => (
    <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm />
        <TodoList />
    </div>
);

export default Todo;