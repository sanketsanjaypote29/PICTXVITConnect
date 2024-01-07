import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavbarSidebar from '../components/Navbar';

function HaveBike() {
  const [bikeno, setBike] = useState('');
  const [phoneno, setPhone] = useState('');
  const [licensecheck, setLicense] = useState(false); // Changed to boolean
  const [helmetcheck, setHelmet] = useState(false); // Changed to boolean
  const [location, setLocation] = useState('Bibwewadi');
  const [department, setDept] = useState('');
  const [year, setYear] = useState('');
  const [gndr, setGnd] = useState('Male');

  const navigate = useNavigate();

  const Submit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post("http://localhost:3001/biker", {
        bikeno,
        phoneno,
        licensecheck,
        helmetcheck,
        location,
        department,
        year,
        gndr
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(result.data);
      navigate('/bikebud');
    } catch (err) {
      if (err.response) {
        console.error('Error response from server:', err.response.data);
      } else if (err.request) {
        console.error('No response received from server:', err.request);
      } else {
        console.error('Error during request setup:', err.message);
      }
    }
  };

  return (
    <body>
      <div id="wrapper">
        <NavbarSidebar />
        <div id="page-wrapper">
          <div id="page-inner">
            <div className="row"></div>
            <div className="row">
              <div className="col-lg-12 "></div>
            </div>
            <div className="content">
              <h3>Hello, Enter Information</h3>
              <form onSubmit={Submit}>
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Vehicle No.</span>
                    <input type="varchar" name="bikeno" placeholder="ST00VR2022" onChange={(e) => setBike(e.target.value)} required />
                  </div>
                  <div className="input-box">
                    <span className="details">Phone No.</span>
                    <input type="phone" name="phoneno" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} required />
                  </div>
                  <div className="checkbox-wrapper-19">
                    <input type="checkbox" id="cbtest-19" name="licensecheck" onChange={() => setLicense(!licensecheck)} checked={licensecheck} required />
                    <span>I have Driver's License</span>&emsp;
                    <input type="checkbox" id="cbtest-20" name="helmetcheck" onChange={() => setHelmet(!helmetcheck)} checked={helmetcheck} />
                    <span>Extra Helmet</span>
                  </div>
                  <div className="input-box">
                    <span className="details">Location</span>
                    <select name="location" className="box" onChange={(e) => setLocation(e.target.value)} required>
                      <option value="Bibwewadi" name="Bibwewadi">Bibwewadi</option>
                      <option value="Katraj" name="Katraj">Katraj</option>
                      <option value="Vishrantwadi" name="Vishrantwadi">Vishrantwadi</option>
                      <option value="Hadapsar" name="Hadapsar">Hadapsar</option>
                      <option value="Pimpri Chinchwad" name="Pimpri Chinchwad">Pimpri Chinchwad</option>
                    </select>
                  </div>
                  <div className="input-box">
                    <span className="details">Department</span>
                    <select name="department" className="box" onChange={(e) => setDept(e.target.value)} required>
                    <option value="CS" name="CS">CS</option>
                    <option value="IT" name="IT">IT</option>
                    <option value="ENTC" name="ENTC">ENTC</option>
                    <option value="AIDS" name="AIDS">AIDS</option>
                    <option value="EC" name="EC">EC</option>
                    </select>
                  </div>
                  <div className="input-box">
                    <span className="details">Year</span>
                    <select name="year" className="box" onChange={(e) => setYear(e.target.value)} required>
                    <option value="FE" name="FE">FE</option>
                    <option value="SE" name="SE">SE</option>
                    <option value="TE" name="TE">TE</option>
                    <option value="BE" name="BE">BE</option>
                    </select>
                  </div>
                </div>
                <div className="gender-details">
                  <input type="radio" name="gndr" id="dot-1" value="Male" checked={gndr === 'Male'} onChange={() => setGnd('Male')} required />
                  <input type="radio" name="gndr" id="dot-2" value="Female" checked={gndr === 'Female'} onChange={() => setGnd('Female')} required />
                  <input type="radio" name="gndr" id="dot-3" value="Prefer not to say" checked={gndr === 'Prefer not to say'} onChange={() => setGnd('Prefer not to say')} required />
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
                  <input type="submit" name="getp" value="Get your Bike Partner" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default HaveBike;
