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

        if (description === '' || description === null || description === undefined) {
            return alert('Campo vazio');
        }
        axios.post(`${URL}/todo/create`, { description })
            .then(rs => this.refresh())
            .catch(err => console.error(err));
    }

    handleChange = (event) => {
        this.setState({ ...this.state, description: event.target.value });
    }

    handleClear = () => {
        this.refresh();
    }

    handleMarkAsDone = (todo) => {
        axios.put(`${URL}/todo/edit/${todo._id}`, { ...todo, done: true })
            .then(rs => this.refresh(this.state.description))
            .catch(err => console.error(err));
    }

    handleMarkAsPending = (todo) => {
        axios.put(`${URL}/todo/edit/${todo._id}`, { ...todo, done: false })
            .then(rs => this.refresh(this.state.description))
            .catch(err => console.error(err));
    }

    handleRemove = (todo) => {
        axios.delete(`${URL}/todo/delete/${todo._id}`)
            .then(rs => this.refresh(this.state.description))
            .catch(err => console.error(err));
    }

    handleSearch = () => {
        this.refresh(this.state.description);
    }

    refresh = (description = '') => {
        const search = description ? `?search=${description}` : '';
        axios.get(`${URL}/todos${search}`)
            .then(rs => this.setState({ ...this.state, description, list: rs.data }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm description={this.state.description} handleAdd={this.handleAdd} handleChange={this.handleChange} handleSearch={this.handleSearch} handleClear={this.handleClear} />
                <TodoList list={this.state.list} handleMarkAsDone={this.handleMarkAsDone} handleMarkAsPending={this.handleMarkAsPending} handleRemove={this.handleRemove} />
            </div>
        );
    }
}

export default Todo;