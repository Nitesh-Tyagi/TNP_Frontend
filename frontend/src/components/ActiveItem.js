import React from 'react';

const ActiveItem = ({ form }) => {
  const handleItemClick = () => {
    // Code to open floating widget
    console.log(`Clicked on form with ID ${form.FormID}`);
  };

  return (
    <div className="active-item" onClick={handleItemClick}>
      <h3>{form.CompanyName}</h3>
      <p>{form.StartDate} - {form.EndDate}</p>
      <p>{form.NoRooms} rooms</p>
      <p>{form.NoMales} males, {form.NoFemales} females</p>
      <p>Status: {form.Status ? 'Approved' : 'Pending'}</p>
    </div>
  );
};

export default ActiveItem;
