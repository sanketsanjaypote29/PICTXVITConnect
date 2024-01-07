import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/register", {
            name,
            email,
            password
        })
        .then(result => {
            console.log(result.data);
            navigate('/login');
        })
        .catch(err => {
            if (err.response) {
                console.error('Error response from server:', err.response.data);
            } else if (err.request) {
                console.error('No response received from server:', err.request);
            } else {
                console.error('Error during request setup:', err.message);
            }
        });
    };
    return (
        <div>
            {/* Navbar */}
            <div className="navbar">
                <div className="container flex">
                    <h1 className="nav">VITConnect</h1>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <section className='showcase2'>
                <div className="showcase-form card" style={{ height: '400px' }}>
                    <h2>Register</h2>
                    <form onSubmit={Submit}>
                        <div className="form-control">
                            <input type="text" name="fullname" placeholder="Full Name" onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="form-control">
                            <input type="text" name="email1" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                        </div>

                        <div className="form-control">
                            <input type="password" name="password1" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <input type="submit" name="register" value="Register" className="btn btn-primary" />
                    </form>
                    <br />
                </div>
            </section>
        </div>
    );
}

export default Register;
