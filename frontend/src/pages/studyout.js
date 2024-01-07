import React from 'react';
import NavbarSidebar from '../components/Navbar';

function Studyout() {
  return (
    <div>
      <div id="wrapper">
        <NavbarSidebar/>
        {/* /. NAV SIDE */}
        <div id="page-wrapper">
          <div id="page-inner">
            <div className="row"></div>
            {/* /. ROW */}
            <div className="row">
              <div className="col-lg-12 "></div>
            </div>
            {/* /. ROW */}
            {getData()}
          </div>
        </div>
      </div>
      {/* /. WRAPPER */}
      {/* SCRIPTS -AT THE BOTOM TO REDUCE THE LOAD TIME*/}
      {/* JQUERY SCRIPTS */}
      <script src="assets/js/jquery-1.10.2.js"></script>
      {/* BOOTSTRAP SCRIPTS */}
      <script src="assets/js/bootstrap.min.js"></script>
      {/* CUSTOM SCRIPTS */}
      <script src="assets/js/custom.js"></script>
    </div>
  );

  function getData() {
    // Fetch and display data here
  }
};

export default Studyout;
