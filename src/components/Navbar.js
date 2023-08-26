import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    const darkModeClick = () => {
        console.log('dark mode Click')
    }
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">{props.home}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.about}</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        {/* <div className={`form-check form-switch mx-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" type="checkbox" onClick={props.toggleDarkMode} role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        </div> */}

                        <div className={`form-check form-switch mx-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" type="checkbox" onClick={props.toggleDarkMode} role="switch" id="flexSwitchCheckDefault" />

                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" onClick={darkModeClick}> Modes</label>
                            {/* <div className='modeDiv'>
                                <div className='modeOption'>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault" onClick={darkModeClick}> Dark Mode</label>
                                <input className="form-check-input" type="checkbox" onClick={props.toggleDarkMode} role="switch" id="flexSwitchCheckDefault" />

                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault" onClick={darkModeClick}> Vibrant Mode</label>
                                <input className="form-check-input" type="checkbox" onClick={props.toggleDarkMode} role="switch" id="flexSwitchCheckDefault" />

                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault" onClick={darkModeClick}> Extra Dark Modes</label>
                                <input className="form-check-input" type="checkbox" onClick={props.toggleDarkMode} role="switch" id="flexSwitchCheckDefault" />
                                </div>
                            </div> */}
                            {/* <select class="form-select" aria-label="Default select example">
                                <option selected>Select Mode</option>
                                <option value="1">
                                     <input className="form-check-input" type="checkbox" onClick={props.toggleDarkMode} role="switch" id="flexSwitchCheckDefault" />
                                </option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select> */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

// proptypes is basically to give the types of thes props
// isReuired to make it mandate to give a values

Navbar.prototype = {
    title: PropTypes.string.isRequired,  // to make sure there is some value
    home: PropTypes.string,
    about: PropTypes.string
}

// Default props are used to set the default values of the props in case if we do not pass the value
// if we forget to give the props value

Navbar.defaultProps = {
    about: 'About TextUtils'
}
