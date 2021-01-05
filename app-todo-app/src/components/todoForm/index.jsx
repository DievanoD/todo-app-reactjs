import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './todoForm.css';

import Grid from '../../components/grid';
import IconButton from '../../components/iconButton';

import { add, changeDescription, search, clear } from '../../reducers/todo/todoActions';

class TodoForm extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.search();
    }

    // componentWillUnmount() {
    //     this.props.search();
    // }

    keyHandler = (e) => {
        const { add, clear, search, description } = this.props;
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description);
        } else if (e.key === 'Escape') {
            clear();
        }
    }

    render() {
        const { add, clear, search, description } = this.props;
        return (
            <div role='form' className='todoForm'>
                <div className="row">
                    <Grid cols='12 8 8 10 10'>
                        <input type="text" id="description" className="form-control" placeholder="Adicione uma tarefa" onChange={this.props.changeDescription} onKeyUp={this.keyHandler} value={this.props.description} />
                    </Grid>

                    <Grid cols='12 4 4 2 2'>
                        <IconButton styleclass='primary' icon='plus' onClick={() => add(description)} />
                        <IconButton styleclass='info' icon='search' onClick={search} />
                        <IconButton styleclass='default' icon='close' onClick={() => clear()} />
                    </Grid>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ description: state.todo.description });

const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search, clear }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);