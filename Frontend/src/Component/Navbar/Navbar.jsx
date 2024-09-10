// src/components/Navbar.js
import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [user, setUser] = useState(null);
  // const navigate = useNavigate();



  const closeMenu = () => setClick(false);

  // const Signup = () => navigate('/Signup');
  // const Loginp = () => navigate('/Loginp');
  // const Contact = () => navigate('/Contact');

  const getInitial = (name) => {
    if (name) {
      return name.charAt(0).toUpperCase();
    }
    return '';
  };

  return (
    <div className="nav">
      <div className="logo">
        <h1 className="navbarName">HerbalVatika</h1>
      </div>
      <div className="space">
        <div className="options" to="/">
          Home
        </div>
        <div
          className="options"
          to="type"
          smooth={true}
          offset={-70}
          duration={50}
          onClick={closeMenu}
        >
          Filter
        </div>
        <div
          className="options"
          to="rule"
          smooth={true}
          offset={-70}
          duration={50}
          onClick={closeMenu}
        >
          Notes
        </div>
        <div
          className="options"
          to="hero"
          smooth={true}
          offset={-70}
          duration={50}
          onClick={closeMenu}
        >
          Bookmark
        </div>
      </div>
      <div className="btn">
        {!user ? (
          <>
            <button className="btn1">
            <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <button className="btn1" >
              Login
            </button>
            <button className="btn1">
              Signup
            </button>
            <button className="btn1" >
            <i class="fa-solid fa-bars"></i>
            </button>

          </>
        ) : (
          <>
          <button className="btn1">
          <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <div className="profilePic">
              <div to="/Dashboard" className="profileLink">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="profile-pic"
                  />
                ) : (
                  <div className="profile-initial">{getInitial(user.name)}</div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
