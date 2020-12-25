import React from 'react';

import './menu.css';

const Menu = (props) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" href="/">
                <i className="fa fa-calendar-check-o"></i> TodoApp
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/todos">Tarefas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">Sobre</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Menu;