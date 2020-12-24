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

    componentDidMount() {
        this.refresh();
    }

    handleAdd = () => {
        const description = this.state.description;
        axios.post(`${URL}/todo/create`, { description })
            .then(rs => this.refresh())
            .catch(err => console.error(err));
    }

    handleChange = (event) => {
        this.setState({ ...this.state, description: event.target.value });
    }

    handleRemove = (todo) => {
        axios.delete(`${URL}/todo/delete/${todo._id}`)
            .then(rs => this.refresh())
            .catch(err => console.error(err));
    }

    refresh = () => {
        axios.get(`${URL}/todos`)
            .then(rs => this.setState({ ...this.state, description: '', list: rs.data }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm description={this.state.description} handleAdd={this.handleAdd} handleChange={this.handleChange} />
                <TodoList list={this.state.list} handleRemove={this.handleRemove} />
            </div>
        );
    }
}

export default Todo;