import React from 'react'

const Review = () => {
  return (
    <div>
                  <h1>Review Table Data</h1>
            <pre>${tableData}</pre>
            <button onclick="window.close()">Back</button>
            <button onclick="window.location.href='/booknow'">Book Now</button>
    </div>
  )
}

export default Review
