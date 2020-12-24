import React from 'react';

import './todoForm.css';

import Grid from '../../components/grid';
import IconButton from '../../components/iconButton';

const TodoForm = (props) => (
    <div role='form' className='todoForm'>
        <div className="row">
            <Grid cols='12 9 10'>
                <input type="text" id="description" className="form-control" placeholder="Adicione uma tarefa" />
            </Grid>

            <Grid cols='12 3 2'>
                <IconButton styleclass='primary' icon='plus' />
            </Grid>
        </div>
    </div>
);

export default TodoForm;