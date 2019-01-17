import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {
    state = {
        open: false,
        width: window.innerWidth
    };

    updateWidth = () => {
        const newState = { width: window.innerWidth };

        if (this.state.open && newState.width > 991) {
            newState.open = false;
        }
        this.setState(newState);
    };

    toggleNav = () => {
        this.setState({ open: !this.state.open });
    };

    componentDidMount() {
        window.addEventListener("resize", this.updateWidth);
    }

    componentWillUnMount() {
        window.removeEventListener("resize", this.updateWidth);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <Link className="navbar-brand text-white" to="/">
                <h2><i><b>Google Books</b></i></h2>
                </Link>
                <button
                    onClick={this.toggleNav}
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className={`${this.state.open ? "" : "collapse "}navbar-collapse navBtn`} id="navbarNav">
                        <ul className="navbar-item list-unstyled">
                            <li className="nav-item mt-3">
                                <Link
                                onClick={this.toggleNav}
                                className={window.location.pethname === "/" ? "nav-link active" : "nav-link"}
                                to="/saved"
                                >
                                Saved Books
                                </Link>
                            </li>
                        </ul>
                    </div>
            </nav>

        );
    }
}

export default Nav;