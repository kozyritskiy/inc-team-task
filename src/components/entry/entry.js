import React, { Component } from 'react'

import Login from '../login'
import Register from '../register'

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export default class Entry extends Component {
  render() {
    return (
        <Router>
            <div>
                <header className='form-header'>
                    <div className='form-logo'>LOGO</div>
                    <nav className='form-nav'>
                        <ul>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                </Switch>
            </div>
        </Router>
    )
  }
}
