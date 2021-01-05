import axios from 'axios';

const URL = 'http://localhost:4000/api';

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description;
        const search = description ? `?search=${description}` : '';
        axios.get(`${URL}/todos${search}`)
            .then(res => dispatch({ type: 'TODO_SEARCHED', payload: res.data }));
    }
}

export const add = (description) => {
    return dispatch => {
        axios.post(`${URL}/todo/create`, { description })
            .then(res => dispatch(clear()))
            .then(res => dispatch(search()));
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/todo/edit/${todo._id}`, { ...todo, done: true })
            .then(res => dispatch(search()));
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/todo/edit/${todo._id}`, { ...todo, done: false })
            .then(res => dispatch(search()));
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/todo/delete/${todo._id}`)
            .then(res => dispatch(search()));
    }
}

export const clear = () => {
    return [{ type: 'TODO_CLEAR' }, search()];
}