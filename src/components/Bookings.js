// Bookings.js
import React from 'react';
import '../CSS/Bookings.css';

const Bookings = () => {
  const bookings = [
    { id: 1, event: 'Wedding', date: '2024-11-25', status: 'Confirmed' },
    { id: 2, event: 'Birthday', date: '2024-12-10', status: 'Pending' },
    { id: 3, event: 'Corporate Event', date: '2025-01-15', status: 'Canceled' },
  ];

  return (
    <div className="bookings">
      <h2>Your Bookings</h2>
      <table className="booking-table">
        <thead>
          <tr>
            <th>Event Type</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.event}</td>
              <td>{booking.date}</td>
              <td className={`status ${booking.status.toLowerCase()}`}>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
