import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
        <nav className="navbar navbar-expand">
            <Link to="/" className="navbar-brand">Escuela de Ingeniería y Ciencias</Link>
            <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/Directory" className="nav-link">Directory</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/Repository" className="nav-link">Repository</Link>
                </li>
                </ul>
            </div>
        </nav>
        );
    }
}

