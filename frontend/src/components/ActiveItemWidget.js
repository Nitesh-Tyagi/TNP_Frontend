import React from 'react';
import ActiveItem from './ActiveItem';

const ActiveItemWidget = ({ item, onClose }) => {
  return (
    <div className="widget-container">
      <div className="widget-header">
        <h2>Item Details</h2>
        <button onClick={onClose}>X</button>
      </div>
      <div className="widget-body">
        <ActiveItem item={item} />
      </div>
    </div>
  );
};

export default ActiveItemWidget;
