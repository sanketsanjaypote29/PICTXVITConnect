import React from 'react';
import NavbarSidebar from '../components/Navbar';

const Shareroom = () => {
  const handleSubmit = (event) => {
    // Handle form submission logic here
    event.preventDefault();
    // Add your logic for handling form data
  };

  return (
    <body>
      {/* Your JSX structure */}
      <div id="wrapper">
        <NavbarSidebar/>
        {/* /. NAV SIDE  */}
        <div id="page-wrapper">
          <div id="page-inner">
            <div className="row"></div>
            {/* /. ROW  */}
            <hr />
            <div className="row">
              <div className="col-lg-12 "></div>
            </div>
            <div className="row text-center pad-top">
              <div className="col-lg-12">
                <div className="content">
                  <h4>Hello, Enter Details </h4>
                  <form onSubmit={handleSubmit}>
                    <div className="user-details">
                      <div className="input-box">
                        <span className="details">Name</span>
                        <input type="text" name="name" placeholder="Name" required />
                      </div>
                      <div className="input-box">
                        <span className="details">Address</span>
                        <input
                          type="text"
                          name="Address"
                          placeholder="Enter your PG/Hostel Name"
                          required
                        />
                      </div>
                      <div className="input-box">
                        <span className="details">Phone No.</span>
                        <input type="text" name="phone" placeholder="Enter your Phone No." required />
                      </div>
                      <div className="input-box">
                        <span className="details">Location</span>
                        <select name="location" className="box">
                          <option value="Bibwewadi">Bibwewadi</option>
                          <option value="Kondhva">Kondhva</option>
                          <option value="Lower_Indiranagar">Lower Indiranagar</option>
                          <option value="Upper_Indiranagar">Upper Indiranagar</option>
                          <option value="Chintamaninagar1">Chintamaninagar 1</option>
                          <option value="Chintamaninagar2" selected>
                            Chintamaninagar 2
                          </option>
                        </select>
                      </div>
                      <div className="input-box">
                        <span className="details">Department</span>
                        <select name="department" className="box">
                          <option value="CS">CS</option>
                          <option value="IT">IT</option>
                          <option value="AIDS" selected>AIDS</option>
                          <option value="Mechanical">Mechanical</option>
                          <option value="Chemical">Chemical</option>
                          <option value="Intrument">Instrument</option>
                        </select>
                      </div>
                      <div className="input-box">
                        <span className="details">Year</span>
                        <select name="year" className="box" required>
                          <option value="1st" name="1st">
                            1st
                          </option>
                          <option value="2nd" name="2nd">
                            2nd
                          </option>
                          <option value="3rd" name="3rd">
                            3rd
                          </option>
                          <option value="4th" name="4th">
                            4th
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="gender-details">
                      <input type="radio" name="gender" id="dot-1" value="Male" required />
                      <input type="radio" name="gender" id="dot-2" value="Female" required />
                      <input type="radio" name="gender" id="dot-3" value="Prefer not to say" required />
                      <span>Gender</span>
                      <div className="category">
                        <label htmlFor="dot-1">
                          <span className="dot one"></span>
                          <span className="gender">Male</span>
                        </label>
                        <label htmlFor="dot-2">
                          <span className="dot two"></span>
                          <span className="gender">Female</span>
                        </label>
                        <label htmlFor="dot-3">
                          <span className="dot three"></span>
                          <span className="gender">Prefer not to say</span>
                        </label>
                      </div>
                    </div>
                    <div className="button">
                      <input type="submit" name="submit" value="Get your Room Partner" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /. WRAPPER  */}
        {/* SCRIPTS -AT THE BOTTOM TO REDUCE THE LOAD TIME*/}
        {/* JQUERY SCRIPTS */}
        <script src="assets/js/jquery-1.10.2.js"></script>
        {/* BOOTSTRAP SCRIPTS */}
        <script src="assets/js/bootstrap.min.js"></script>
        {/* CUSTOM SCRIPTS */}
        <script src="assets/js/custom.js"></script>
      </div>
    </body>
  );
};

export default Shareroom;
