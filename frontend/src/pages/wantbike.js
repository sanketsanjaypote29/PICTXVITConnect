import React, { useState } from "react";
import NavbarSidebar from "../components/Navbar";

const Wantbike = () => {
  const [phoneNo, setPhoneNo] = useState("");
  const [location, setLocation] = useState("Chintamaninagar2"); // Default location
  const [department, setDepartment] = useState("AIDS"); // Default department
  const [year, setYear] = useState("4th"); // Default year
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", {
      phoneNo,
      location,
      department,
      year,
      gender,
    });
  };

  return (
    <div>
      <div id="wrapper">
        <NavbarSidebar />
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
                      onChange={(e) => setLocation(e.target.value)}>
                      <option name="Bibwewadi" value="Bibwewadi">
                        Bibwewadi
                      </option>
                      <option name="kondhwa" value="kondhwa">
                        Kondhwa
                      </option>
                      <option
                        name="Lower_Indiranagar"
                        value="Lower_Indiranagar">
                        Lower Indiranagar
                      </option>
                      <option
                        name="Upper_Indiranagar"
                        value="Upper_Indiranagar">
                        Upper Indiranagar
                      </option>
                      <option name="Chintamaninagar1" value="Chintamaninagar1">
                        Chintamaninagar 1
                      </option>
                      <option
                        name="Chintamaninagar2"
                        value="Chintamaninagar2"
                        selected>
                        Chintamaninagar 2
                      </option>
                      <option value="Dhankavdi" name="Dhankavdi">
                        Dhankavdi
                      </option>
                      <option value="Kothrud" name="Kothrud">
                        Kothrud
                      </option>
                    </select>
                  </div>
                  <div className="input-box">
                    <span className="details">Department</span>
                    <select
                      name="department"
                      className="box"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}>
                      <option value="CS">CS</option>
                      <option value="IT">IT</option>
                      <option value="AIDS" selected>
                        AIDS
                      </option>
                      <option value="Mechanical">Mechanical</option>
                      <option value="Chemical">Chemical</option>
                      <option value="Intrument">Intrument</option>
                    </select>
                  </div>
                  <div className="input-box">
                    <span className="details">Year</span>
                    <select
                      name="language"
                      className="box"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}>
                      <option value="1st">1st</option>
                      <option value="2nd">2nd</option>
                      <option value="3rd">3rd</option>
                      <option value="4th" selected>
                        4th
                      </option>
                    </select>
                  </div>
                </div>
                <div className="gender-details">
                  {/* Add radio buttons and labels for gender */}
                  <input type="radio" name="gender" id="dot-1" />
                  <input type="radio" name="gender" id="dot-2" />
                  <input type="radio" name="gender" id="dot-3" />
                  <span>Gender</span>
                  <div class="category">
                    <label for="dot-1">
                      <span class="dot one"></span>
                      <span class="gender">Male</span>
                    </label>
                    <label for="dot-2">
                      <span class="dot two"></span>
                      <span class="gender">Female</span>
                    </label>
                    <label for="dot-3">
                      <span class="dot three"></span>
                      <span class="gender">Prefer not to say</span>
                    </label>
                  </div>
                </div>
                <div className="button">
                  <input
                    type="submit"
                    name="submit"
                    value="Get your Bike Partner"
                  />
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
