import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../food_delevari_media/logoNav.png';
import useFirebase from '../../Hooks/useFirebase';
import './Navbar.css';

const Navbar = () => {
    const { handleGoogleSignOut, user } = useFirebase();

    // toggle active class on menubar-------------------------------
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    }
    // menu-active class-------------------------------------------- 
    const menuActive = {
        borderBottom: '2px solid #f7b614'
    }
    return (

        <header id="home">
            <div className="header">
                {/* header logo------------------------------------- */}
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                {/* Header menu-------------------------------------- */}
                <nav className={isActive ? 'navbar active' : 'navbar'}>
                    <NavLink to="/home" activeStyle={menuActive}>Home</NavLink>
                    <NavLink to="/aboutUs" activeStyle={menuActive}>About Us</NavLink>
                    <NavLink to="/myOrder" activeStyle={menuActive}>My Order</NavLink>
                    <NavLink to="/addFood" activeStyle={menuActive}>Add Food</NavLink>
                    <NavLink to="/manageFood" activeStyle={menuActive}>Manage Food</NavLink>
                    {
                        user.displayName
                            ?
                            <NavLink to="/login" onClick={handleGoogleSignOut} activeStyle={menuActive}>Logout</NavLink>
                            :
                            <NavLink to="/login" activeStyle={menuActive}>Login</NavLink>
                    }


                </nav>

                {/* Header search bar---------------------------------- */}
                <form action="" className="search-bar-container">
                    <input type="search" id="search-bar" placeholder="search here..." />
                    <label htmlFor="search-bar" className="fas fa-search"></label>
                </form>

                {/* menu toggler ---------------------------------------- */}
                <div id="menu-bar" onClick={toggleClass} className={isActive ? 'fas fa-times' : 'fas fa-bars'}>
                </div>
                {/* Header icons-------------------------------- */}
                <div className="icons">
                    <Link to="/" className="fas fa-shopping-cart" />
                    <Link to="/" className="fas fa-phone-alt" />
                    <Link to="/login" className="fas fa-user" />
                </div>
            </div>

        </header>
    );
};

export default Navbar;