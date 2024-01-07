import React, { useState } from 'react';
import NavbarSidebar from '../components/Navbar';

const Studyinput = () => {
  const [formData, setFormData] = useState({
    name: '',
    sub: '',
    phoneno: '',
    platform: 'GOOGLEMEET',
    department: 'Artifical Intelligence & Data Sc',
    year: 'all',
    meetlink1: '',
    appt: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <body>
      {/* Your JSX structure */}
      <div id="wrapper">
        <NavbarSidebar/>
        <div id="page-wrapper">
          <div id="page-inner">
            <div className="row"></div>
            <div className="row">
              <div className="col-lg-12 "></div>
            </div>
            <div className="content">
              <form onSubmit={handleSubmit}>
                <div className="user-details">
                  <div className="input-box">
                    <span className="details" autoComplete="off">
                      Name{' '}
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details" autoComplete="off">
                      Subject{' '}
                    </span>
                    <input
                      type="text"
                      name="sub"
                      placeholder="Subject"
                      required
                      value={formData.sub}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Phone No.</span>
                    <input
                      type="text"
                      name="phoneno"
                      placeholder="Enter your Phone No."
                      required
                      value={formData.phoneno}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Platform</span>
                    <select
                      name="platform"
                      className="box"
                      value={formData.platform}
                      onChange={handleChange}
                    >
                      <option value="GOOGLEMEET">Google Meet</option>
                      <option value="MICROSOFT TEAMS">MicrosoftTeams</option>
                      <option value="Zoom">Zoom</option>
                      <option value="YOUTUBELIVE">YouTubeLive</option>
                      <option value="INVITCOLLEGE">InCollege</option>
                    </select>
                  </div>
                  <div className="input-box">
                    <span className="details">Department</span>
                    <select
                      name="department"
                      className="box"
                      value={formData.department}
                      onChange={handleChange}
                    >
                      <option value="Computer Science">CS</option>
                      <option value="InformationTechnology">IT</option>
                      <option value="Artifical Intelligence & Data Sc">AIDS</option>
                      <option value="Mechanical">Mechanical</option>
                      <option value="Chemical">Chemical</option>
                      <option value="Intrument">Instrumentation</option>
                    </select>
                  </div>
                  <div className="input-box">
                    <span className="details">Year</span>
                    <select name="year" className="box" value={formData.year} onChange={handleChange}>
                      <option value="1st">1st</option>
                      <option value="2nd">2nd</option>
                      <option value="3rd">3rd</option>
                      <option value="4th">4th</option>
                      <option value="all">For all</option>
                    </select>
                  </div>
                  <div className="input-box">
                    <span className="details">Platform Link </span>
                    <input
                      type="text"
                      name="meetlink1"
                      placeholder="Meeting Link"
                      required
                      value={formData.meetlink1}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Select a time:</span>
                    <input
                      type="datetime-local"
                      id="appt"
                      name="appt"
                      value={formData.appt}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="button">
                  <input type="submit" name="getp" value="Get your Study Buddy" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <script src="assets/js/jquery-1.10.2.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/custom.js"></script>
      </div>
    </body>
  );
};

export default Studyinput;
