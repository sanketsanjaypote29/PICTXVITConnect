import React, { useEffect } from 'react';
import '../assets/css/Navbar.css'
const NavbarSidebar = () => {
  useEffect(() => {
    // Include Bootstrap and jQuery script dynamically
    const script1 = document.createElement('script');
    script1.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    script1.crossOrigin = 'anonymous';
    script1.integrity = 'sha256-GLT2LmPk1FgPdG7sEC9C1b8tBWTafkdI1j03JmC4z5I=';
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js';
    script2.crossOrigin = 'anonymous';
    script2.integrity = 'sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCvnbB9PLc+ssAgcfUKFJFj/DAiSNa';
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

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
            <a className="navbar-brand" href="/Dash">
              <p style={{ fontSize: '30px', color:'black' }}>VIT Connect</p>
            </a>
          </div>
        </div>
      </div>
      <nav className="navbar-default navbar-side" role="navigation">
        <div className="sidebar-collapse">
          <ul className="nav" id="main-menu">
            <li className="active-link">
              <a href="/Dash">
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
                <i className="fa fa-book "></i>Event Management
              </a>
            </li>
            <li>
              <a href="/buy_sell">
                <i className="fa fa-lightbulb-o"></i>Trade Old Equipment
              </a>
            </li>
            <li>
              <a href="/roommate">
                <i className="fa fa-users"></i>Find Flatmate
              </a>
            </li>
            <li>
              <a href="/forumindex">
                <i className="fa fa-quora" aria-hidden="true" alt="forum image"></i>Community Forum
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-edit "></i>Logout
              </a>
            </li>
            {/* Add other list items as needed */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarSidebar;
