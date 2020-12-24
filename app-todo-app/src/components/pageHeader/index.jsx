import React from 'react';

import './pageHeader.css';

const PageHeader = (props) => (
    <header className="page-header">
        <h2>{props.name} <small>{props.small}</small></h2>
    </header>
)

export default PageHeader;