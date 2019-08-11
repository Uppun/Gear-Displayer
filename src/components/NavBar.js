import React from 'react';
import {navigate} from 'hookrouter';
import '../assets/navbar.css'

const NavBar = ({id}) => {
    if (!id) {
        return null;
    }

    const ariyalaLink = `https://ffxiv.ariyala.com/${id}`;
    const homeLink = `http://localhost:3000/`;

    function handleHomeClick(e) {
        navigate(homeLink);
    }

    function handleAriyalaClick(e) {
        window.location.href = ariyalaLink;
    }

    return (
        <div className='top-bar'>
            <div className='home-button-content'>
                <button className='nav-button' onClick={handleHomeClick}>Home</button>
            </div>
            <div className='ariyala-button'>
                <button className='nav-button' onClick={handleAriyalaClick}>View Build on Ariyala</button>
            </div>
        </div>     
    )
}

export default NavBar;