import React from 'react';

import './iconButton.css';

const IconButton = (props) => {
    if (props.hide) {
        return null;
    } else {
        return (
            <button className={'btn btn-' + props.styleclass} onClick={props.onClick}>
                <i className={'fa fa-' + props.icon}></i>
            </button>
        );
    }
};

export default IconButton;