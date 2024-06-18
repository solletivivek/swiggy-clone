import React from 'react';

const SideBar = ({ showAddFirmForm, showAddProductForm }) => {
  return (
    <div className="sideBarSection">
      <ul>
        <li onClick={showAddFirmForm}>Add Firm</li>
        <li onClick={showAddProductForm}>Add Products</li>
        <li>All Products</li>
        <li>User Details</li>
      </ul>
    </div>
  );
}

export default SideBar;
