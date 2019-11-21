import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='nav-wrapper'>
                <div className='left-side'>
                    <div className='nav-link-wrapper'>
                        <NavLink exact to='/' activeClassName='current-use'>Home</NavLink>
                    </div>
                    <div className='nav-link-wrapper'>
                        <NavLink to='/about-me' activeClassName='current-use'>About</NavLink>
                    </div>
                    <div className='nav-link-wrapper'>
                        <NavLink to='/contact' activeClassName='current-use'>Contact</NavLink>
                    </div>
                    <div className='nav-link-wrapper'>
                        <NavLink to='/blog' activeClassName='current-use'>Blog</NavLink>
                    </div>
                </div>

                <div className='right-side'>JUSTIN KAUNITZ</div>
            </div>
        )
    }
}