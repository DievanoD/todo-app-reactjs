import React from 'react';

import './iconButton.css';

import If from '../if';

const IconButton = (props) => (
    <If test={!props.hide}>
        <button className={'btn btn-' + props.styleclass} onClick={props.onClick}>
            <i className={'fa fa-' + props.icon}></i>
        </button>
    </If>
);

export default IconButton;