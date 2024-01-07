import React from 'react';
import NavbarSidebar from '../components/Navbar';

function Bkbud() {
    return (
        <div style={{ fontFamily: 'Lato, sans-serif', lineHeight: '30px' }}>

            <div id="wrapper">
                <NavbarSidebar/>
                {/* /. NAV SIDE  */}
                <div id="page-wrapper">
                    <div id="page-inner">
                        <div className="row"></div>
                        {/* /. ROW  */}
                        <div className="row">
                            <div className="col-lg-12 "></div>
                        </div>
                        {/* /. ROW  */}
                        <div className="row text-center pad-top">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <div className="div-square">
                                    <a href="/havebike">
                                        <i className=" fa fa-solid fa-person-biking fa-4x"></i>
                                        <h5 style={{ color: 'black', textDecoration: 'none' }}>Do you have a bike?</h5>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <div className="div-square">
                                    <a href="/wantbike">
                                        <i className="fa fa-solid fa-user fa-4x"></i>
                                        <h5 style={{ color: 'black', textDecoration: 'none' }}>Do you need a lift?</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Your PHP code here */}
                        <form method="POST">
                            {/* Your table or other form elements here */}
                        </form>
                    </div>
                </div>
            </div>
            {/* /. WRAPPER  */}
            {/* SCRIPTS -AT THE BOTOM TO REDUCE THE LOAD TIME*/}
            {/* JQUERY SCRIPTS */}
            <script src="assets/js/jquery-1.10.2.js"></script>
            {/* BOOTSTRAP SCRIPTS */}
            <script src="assets/js/bootstrap.min.js"></script>
            {/* CUSTOM SCRIPTS */}
            <script src="assets/js/custom.js"></script>
        </div>
    );
}

export default Bkbud;
