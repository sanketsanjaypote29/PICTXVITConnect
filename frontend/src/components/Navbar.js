import React from 'react';

const NavbarSidebar = () => {
  return (
    <div>
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="adjust-nav">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".sidebar-collapse"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="../index.php">
              <p style={{ fontSize: '30px' }}>VIT Connect</p>
            </a>
          </div>
        </div>
      </div>
      <nav className="navbar-default navbar-side" role="navigation">
        <div className="sidebar-collapse">
          <ul className="nav" id="main-menu">
            <li className="active-link">
              <a href="/dash">
                <i className="fa fa-desktop "></i>Home
              </a>
            </li>
            <li>
              <a href="/bikebud">
                <i className="fa-solid fa-person-biking"></i>Bike Buddy
              </a>
            </li>
            <li>
              <a href="/study_option">
                <i className="fa fa-book "></i>Study
              </a>
            </li>
            <li>
              <a href="/buy_sell">
                <i className="fa fa-lightbulb-o "></i>Buy/Sell
              </a>
            </li>
            <li>
              <a href="/roommate">
                <i className="fa fa-users"></i>Room Mate
              </a>
            </li>
            <li>
              <a href="/index">
                <i className="fa fa-quora" aria-hidden="true" alt="forum image"></i>Community Forum
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-edit "></i>Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarSidebar;
