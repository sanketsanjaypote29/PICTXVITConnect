import React, { useEffect, useState } from 'react';
import NavbarSidebar from '../components/Navbar';

const Roomfinder = () => {
  const [roommates, setRoommates] = useState([]);

  useEffect(() => {
    const fetchRoommates = async () => {
      try {
        const response = await fetch('../config.php'); // Replace with your actual API endpoint
        const data = await response.json();
        setRoommates(data);
      } catch (error) {
        console.error('Error fetching roommates:', error);
      }
    };

    fetchRoommates();
  }, []);

  return (
    <body>
      {/* Your JSX structure */}
      <div id="wrapper">
        {/* ... (other code) ... */}
        <NavbarSidebar/>
        <div id="page-wrapper">
          <div id="page-inner">
            <div className="row"></div>
            {/* ... (other code) ... */}
            <div className="row">
              <div className="col-lg-12 ">
                {roommates.map((row) => (
                  <div className="grid" key={row.rphone}>
                    <div className="product-card">
                      <div className="product-details">
                        <span className="product-catagory">{row.rlocation}</span>
                        <h4>{row.rname}</h4>
                        <p>{row.rphone}</p>
                        <h5>
                          Address<p>{row.radd}</p>
                        </h5>
                        <p>
                          <b>Dept. </b>
                          {row.rdpet} {row.ryear} Year
                        </p>
                        <p>{row.rgender}</p>
                        <div className="product-bottom-details">
                          <div className="product-price">
                            <a href={`https://wa.me/${row.rphone}?text=hi`}>
                              <button className="product-button">Chat Now</button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ... (other code) ... */}
    </body>
  );
};

export default Roomfinder;
