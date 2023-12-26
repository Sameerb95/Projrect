// import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  // Dummy user credentials (replace with real user data)
  const dummyUser = {
    email: 'demo@gmail.com',
    password: '1234',
  };

  const [user, setUser] = useState({
    name:'',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

//   const login = () => {
//     axios
//       .post('http://localhost:3000/login', user)
//       .then((res) => {
//         if (res.data === 'valid') {
//           localStorage.setItem('isLoggedIn', 'true');
//           navigate('/home'); // Redirect to the homepage
//         } else {
//           alert('Invalid User'); // Show an alert for invalid user
//         }
//       })
//       .catch((error) => {
//         console.error('Login error:', error);
//         alert('An error occurred while logging in');
//       });
//   };

const login = () => {
    // Compare entered credentials with dummy user credentials
    if (user.email === dummyUser.email && user.password === dummyUser.password) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/home'); // Redirect to the homepage on successful login
    } else {
      alert('Invalid credentials'); // Show an alert for invalid credentials
    }
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-96 bg-white border rounded-lg shadow-md p-4 space-y-4">
        <h1 className="text-2xl font-bold">Login</h1>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          className="border rounded-md px-3 py-2 w-full focus:outline-none"
          placeholder="Enter your Name"
        />
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="border rounded-md px-3 py-2 w-full focus:outline-none"
          placeholder="Enter your Email"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          className="border rounded-md px-3 py-2 w-full focus:outline-none"
          placeholder="Enter your Password"
        />
        <div
          className="bg-blue-500 text-white text-center font-semibold rounded-md px-4 py-2 cursor-pointer hover:bg-blue-600"
          onClick={async() => {
            const response = await fetch('/',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'},
                    body : JSON.stringify(user)
            })
            if (response.ok){
                console.log('response worked')
            }
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Register;
