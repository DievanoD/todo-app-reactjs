import React, { Component } from 'react';

import './grid.css';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    toCssClasses = (numbers) => {
        const cols = numbers ? numbers.split(' ') : [];
        let classes = '';

        if (cols[0]) classes += `col-xs-${cols[0]}`;
        if (cols[1]) classes += ` col-sm-${cols[1]}`;
        if (cols[2]) classes += ` col-md-${cols[2]}`;
        if (cols[3]) classes += ` col-lg-${cols[3]}`;

        return classes;
    }

    render() {
        const gridClasses = this.toCssClasses(this.props.cols || 12);
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        );
    }
}

export default Grid;