import React from 'react'

const AddFirm = () => {
  return (
    <div className="firstSection">
               <form className="tableForm">
               <label >Firm Name</label>
                <input type="text" />
                <label >Area</label>
                <input type="text" />
                <label >Category</label>
                <input type="text" />
                <label >Region</label>
                <input type="text" />
                <label >Offer</label>
                <input type="text" />
                <label >Image</label>
                <input type="file" />

                <div className="btnSubmit">
                    <button>Submit</button>
                </div>
               </form>

        </div>
  )
}

export default AddFirm