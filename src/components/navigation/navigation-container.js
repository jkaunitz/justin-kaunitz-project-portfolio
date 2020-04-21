import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

const NavigationComponent = props => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className='nav-link-wrapper'>
                <NavLink to={route} activeClassName='current-use'>{linkText}</NavLink>
            </div>
        );
    };

    const handleSignOut = () => {
        axios
        .delete('https://api.devcamp.space/logout', {withCredentials: true})
        .then(response => {
            if (response.status === 200) {
                props.history.push('/');
                props.handleSuccessfulLogout();
            }
            return response.data;
        })
        .catch(error => {
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

                <div className='nav-link-wrapper'>
                    <NavLink to='/blog' activeClassName='current-use'>Blog</NavLink>
                </div>
                
                
                {props.loggedInStatus === 'LOGGED_IN' ? (
                    dynamicLink('/portfolio-manager', 'Portfolio Manager')
                ) : null}
            </div>

            <div className='right-side'>
            JUSTIN KAUNITZ
            {props.loggedInStatus === 'LOGGED_IN' ? ( 
                <a onClick={handleSignOut}>
                    <FontAwesomeIcon icon='sign-out-alt' />
                </a> 
                ) : null}
            </div>
        </div>
    );
}

export default withRouter(NavigationComponent);