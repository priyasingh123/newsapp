import React, { Component } from 'react'

class Navbar extends Component {   
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">News App</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    {/* <button className="nav-link" onClick={() => this.props.setCategory('general')}>General</button> */}
                                    <a className="nav-link" href="/newsapp/General">General</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/newsapp/Business">Business</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/newsapp/Entertainment">Entertainment</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/newsapp/Health">Health</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/newsapp/Science">Science</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/newsapp/Sports">Sports</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/newsapp/Technology">Technology</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav></>
        )
    }
}

export default Navbar;