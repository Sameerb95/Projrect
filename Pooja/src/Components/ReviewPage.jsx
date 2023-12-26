import React from 'react';

const ReviewPage = ({ materials }) => {
  return (
    <div>
      <h1>Review Table Data</h1>
      <table>
        <thead>
          <tr>
            <th>Material Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((material) => (
            <tr key={material.id}>
              <td>{material.name}</td>
              <td>{material.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => window.history.back()}>Back</button>
      <button onClick={() => window.location.href = '/'}>Book Now</button>
    </div>
  );
};

export default ReviewPage;
