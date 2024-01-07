import React, { useEffect } from 'react';
import '../assets/css/bootstrap.css';
import '../assets/css/font-awesome.css';
import '../assets/css/custom.css';
import '../assets/css/style.css';
import '../assets/css/utilities.css';
import { Link } from 'react-router-dom';
import NavbarSidebar from '../components/Navbar';
const HomePage = () => {
  useEffect(() => {
    // You can include any logic you want to execute on component mount here
  }, []);

  return (
    <div>
      <div id="wrapper">
        <NavbarSidebar/>
        {/* /. NAV SIDE  */}
        <div id="page-wrapper">
          <div id="page-inner">
            <div className="row"></div>
            {/* /. ROW  */}
            <div className="row">
              <div className="col-lg-12 ">
                <div className="alert alert-info">
                  <strong>Welcome To VITConnect</strong>
                </div>
              </div>
            </div>
            {/* /. ROW  */}
            <div className="row text-center pad-top">
              <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                <div className="div-square">
                  <a href="/bikebud">
                    <i className=" fa fa-solid fa-person-biking fa-4x" alt='bike icon'></i>
                    <h5 style={{ color: 'black', textDecoration: 'none' }}>Bike Buddy</h5>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                <div className="div-square">
                  <a href="/studyout">
                    <i className="fa  fa-book fa-4x" alt='study icon'></i>
                    <h5 style={{ color: 'black', textDecoration: 'none' }}>Study</h5>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                <div className="div-square">
                  <a href="/buy_sell">
                    <i className="fa fa-lightbulb-o fa-4x" alt='buy sell icon'></i>
                    <h5 style={{ color: 'black', textDecoration: 'none' }} alt='room mate icon'>Buy/Sell</h5>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                <div className="div-square">
                  <a href="/roommate">
                    <i className="fa fa-users fa-4x"></i>
                    <h5 style={{ color: 'black', textDecoration: 'none' }} alt='logout icon'>Room</h5>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                <div className="div-square">
                  <a href="/index">
                    <i className=" fa fa fa-quora fa-4x" aria-hidden="true"></i>
                    <h5 style={{ color: 'black', textDecoration: 'none' }} alt='room mate icon'>Forum</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
