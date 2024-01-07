import React, { useState } from 'react';
import NavbarSidebar from '../components/Navbar';

const Wantbike = () => {
  const [phoneNo, setPhoneNo] = useState('');
  const [location, setLocation] = useState('Chintamaninagar2'); // Default location
  const [department, setDepartment] = useState('AIDS'); // Default department
  const [year, setYear] = useState('4th'); // Default year
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { phoneNo, location, department, year, gender });
  };

  return (
    <div>
      <div id="wrapper">
        <NavbarSidebar/>
        <div id="page-wrapper">
          <div id="page-inner">
            <div className="content">
              <form onSubmit={handleSubmit}>
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Phone No.</span>
                    <input
                      type="text"
                      placeholder="Enter your Phone No."
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Location</span>
                    <select
                      name="location"
                      className="box"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      {/* Add location options */}
                    </select>
                  </div>
                  <div className="input-box">
                    <span className="details">Department</span>
                    <select
                      name="department"
                      className="box"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                    >
                      {/* Add department options */}
                    </select>
                  </div>
                  <div className="input-box">
                    <span className="details">Year</span>
                    <select
                      name="language"
                      className="box"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    >
                      {/* Add year options */}
                    </select>
                  </div>
                </div>
                <div className="gender-details">
                  {/* Add radio buttons and labels for gender */}
                </div>
                <div className="button">
                  <input type="submit" name="submit" value="Get your Bike Partner" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wantbike;
