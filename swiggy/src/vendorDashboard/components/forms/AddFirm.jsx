import React from 'react';

const AddFirm = () => {
  return (
    <div className="firstSection">
      <form className="tableForm">
        <label>Firm Name</label>
        <input type="text" />

        <label>Area</label>
        <input type="text" />

        <div className="check-inp">
          <label>Category</label>
          <div className="checkbox-b">
            <div className="checkbox-item">
              <input type="checkbox" value="Veg" id="veg" />
              <label htmlFor="veg">Veg</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" value="Non-veg" id="non-veg" />
              <label htmlFor="non-veg">Non-Veg</label>
            </div>
          </div>
        </div>

        {/* <label>Region</label>
        <input type="text" /> */}

<div className="check-inp">
          <label>Region</label>
          <div className="checkbox-b">
            <div className="checkbox-item">
              <input type="checkbox" value="South-Indian" id="South-Indian" />
              <label htmlFor="South-Indian">South Indian</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" value="North-Indian" id="North-Indian" />
              <label htmlFor="North-Indian">North Indian</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" value="Chinese" id="Chinese" />
              <label htmlFor="Chinese">Chinese</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" value="Bakery" id="Bakery" />
              <label htmlFor="Bakery">Bakery</label>
            </div>
          </div>
        </div>

        <label>Offer</label>
        <input type="text" />

        <label>Image</label>
        <input type="file" />

        <div className="btnSubmit">
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddFirm;
