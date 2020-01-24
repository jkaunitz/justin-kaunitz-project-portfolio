import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

const NavigationComponent = props => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className='nav-link-wrapper'>
                <NavLink to='/blog' activeClassName='current-use'>Blog</NavLink>
            </div>
        );
    };

    const handleSignOut = () => {
        axios.delete('https://api.devcamp.space/logout', {withCredentials: true}).then(response => {
            if (response.status === 200) {
                props.history.push('/');
                props.handleSuccessfulLogout();
            }
            return response.data;
        }).catch(error => {
            console.log('Error signing out', error);
        })
    };

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
                
                {props.loggedInStatus === 'LOGGED_IN' ? dynamicLink('/blog', 'Blog') : null}
            </div>

            <div className='right-side'>
            JUSTIN KAUNITZ

            {props.loggedInStatus === 'LOGGED_IN' ? <a onClick={handleSignOut}>Sign Out</a> : null}
            </div>
        </div>
    );
}

export default withRouter(NavigationComponent);