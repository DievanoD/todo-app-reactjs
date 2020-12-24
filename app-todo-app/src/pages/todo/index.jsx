import React, { Component } from 'react';
import axios from 'axios';

import './todo.css';

import PageHeader from '../../components/pageHeader';
import TodoForm from '../../components/todoForm';
import TodoList from '../../components/todoList';

const URL = 'http://localhost:4000/api';
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            list: []
        }
    }

    handleChange = (event) => {
        this.setState({ ...this.state, description: event.target.value });
    }

    handleAdd = () => {
        const description = this.state.description;
        axios.post(`${URL}/todo/create`, { description })
            .then(rs => console.log('Funcionou'))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm description={this.state.description} handleChange={this.handleChange} handleAdd={this.handleAdd} />
                <TodoList />
            </div>
        );
    }
}

export default Todo;