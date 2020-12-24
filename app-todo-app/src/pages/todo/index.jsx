import React, { Component } from 'react';

import PageHeader from '../../components/pageHeader';
import TodoForm from '../../components/todoForm';
import TodoList from '../../components/todoList';
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm />
                <TodoList />
            </div>
        );
    }
}

export default Todo;