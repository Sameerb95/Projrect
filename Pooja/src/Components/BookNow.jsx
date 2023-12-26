import React, { useState,useEffect } from 'react';
import NavBar from './NavBar';
import { Navigate, useNavigate } from 'react-router-dom';

const BookNow = () => {
  const navigate = useNavigate();
  const [materials, setMaterials] = useState([
    { id: 1, name: 'Material 1', quantity: 5 },
    { id: 2, name: 'Material 2', quantity: 3 },
    { id: 3, name: 'Material 3', quantity: 2 },
    { id: 4, name: 'Material 4', quantity: 0 },
  ]);


  const [newMaterialName, setNewMaterialName] = useState('');
  const [newMaterialQuantity, setNewMaterialQuantity] = useState('');

  const handleIncrement = (id) => {
    const updatedMaterials = [...materials];
    const materialIndex = updatedMaterials.findIndex((m) => m.id === id);
    if (materialIndex !== -1) {
      updatedMaterials[materialIndex].quantity += 1;
      setMaterials(updatedMaterials);
    }
  };

  const handleDecrement = (id) => {
    const updatedMaterials = [...materials];
    const materialIndex = updatedMaterials.findIndex((m) => m.id === id);
    if (materialIndex !== -1 && updatedMaterials[materialIndex].quantity > 0) {
      updatedMaterials[materialIndex].quantity -= 1;
      setMaterials(updatedMaterials);
    }
  };

  const handleAddMaterial = () => {
    // Ensure both fields are filled
    if (newMaterialName.trim() !== '' && newMaterialQuantity.trim() !== '') {
      const newMaterial = {
        id: materials.length + 1,
        name: newMaterialName,
        quantity: parseInt(newMaterialQuantity, 10),
      };

      setMaterials([...materials, newMaterial]);
      setNewMaterialName('');
      setNewMaterialQuantity('');
    }
  };
  

  // Dummy user data
  const userName = "John Doe";
  const mobileNumber = "123-456-7890";

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
        <div className="mb-4">
          <input
            type="text"
            placeholder="Material Name"
            className="px-3 py-2 border rounded mr-2"
          />
          <input
            type="number"
            placeholder="Quantity"
            className="px-3 py-2 border rounded mr-2"
          />
          <button
          onClick={handleAddMaterial}
            className="bg-green-500 text-white px-3 py-2 rounded"
          >
            Add Material
          </button>
        </div>

        <table className="min-w-full text-center border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Material Name</th>
              <th className="px-4 py-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {materials.map((material) => (
              <tr key={material.id}>
                <td className="px-4 py-2 border">{material.name}</td>
                <td className="px-4 py-2 border">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDecrement(material.id)}
                  >
                    -
                  </button>
                  <span className="px-2">{material.quantity}</span>
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => handleIncrement(material.id)}
                  >
                    +
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
        >
          Review
        </button>
      </div>
    </div>
  );
};

export default BookNow;

