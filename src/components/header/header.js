import React from 'react'

import {Link } from 'react-router-dom';

import "./header.scss";
import logo from './logo.png';

const Header = () => {
    return (
          <header className='header'>
                <div className='header__container container'>
                    <div className='header__logo'>
                        <Link className='header__logo-link' to="/">
                            <h1 className='header__logo-title'>LOGO</h1>
                        </Link>
                    </div>
                    <nav className='header__nav'>
                        <ul className='header__list'>
                            <li className='header__item'><Link className='header__link' to="/members">MEMBERS</Link></li>
                            <li className='header__item'><Link className='header__link' to="/tasks">TASKS</Link></li>
                        </ul>
                        <ul className='header__list'>
                            <li className="header__item">
                                <div className="btn"><button>REGISTER</button></div>
                            </li>
                            <li className="header__item">
                                <div className="btn"><button>LOGIN</button></div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
      )
    }

export default Header;

