import React from 'react';

import './todoForm.css';

import Grid from '../../components/grid';
import IconButton from '../../components/iconButton';

const TodoForm = (props) => {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd();
        } else if (e.key === 'Escape') {
            props.handleClear();
        }
    }
    return (
        <div role='form' className='todoForm'>
            <div className="row">
                <Grid cols='12 8 8 10 10'>
                    <input type="text" id="description" className="form-control" placeholder="Adicione uma tarefa" onChange={props.handleChange} onKeyUp={keyHandler} value={props.description} />
                </Grid>

                <Grid cols='12 4 4 2 2'>
                    <IconButton styleclass='primary' icon='plus' onClick={props.handleAdd} />
                    <IconButton styleclass='info' icon='search' onClick={props.handleSearch} />
                    <IconButton styleclass='default' icon='close' onClick={props.handleClear} />
                </Grid>
            </div>
        </div>
    );
}

export default TodoForm;