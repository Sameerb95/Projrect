import React, { useState,useEffect } from 'react';
import NavBar from './NavBar';
import { Navigate, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.css'; 



const userName = "John Doe";
const mobileNumber = "123-456-7890";


const Pooja = () => {
// const navigate = useNavigate();


// const [pujaList, setpujaList] = useState([]);

const fetchpuja = async(url) =>{
  try{
  const data = await fetch(url);
  // const data = await res.json();
  console.log(data)
  }catch(e){
    console.error(e)
}
}

useEffect(() =>{
  fetchpuja('/Puja');
},[])

return ( 
  <div>
    <NavBar />
    <div></div>
    <br></br><br></br>
    <div className="container mx-auto py-4 mt-14">
      <div className="mb-4">
        <h1 className="text-3xl font-semibold">User: {userName}</h1>
        <p className="text-xl">Mobile Number: {mobileNumber}</p>
      </div>
      {/* <div>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    </div>

    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
        </div> */}
        <span><h3>Select The Puja: </h3></span>
        {/* <div>
        <select class="form-select form-select-lg">
        {pujaList.map((e) => {
        return <option value={e}>{e}</option>;
    })}
        </select> 

        </div> */}
      <button style={{position: 'relative' , alignItems: 'center'}} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
      >
        Confirm
       
      </button>
    </div>
  </div>
);
};

export default Pooja;