import React from 'react'

const AddProduct = () => {
  return (
    <div className="firstSection">
    <form className="tableForm">
    <label >Product Name</label>
     <input type="text" />
     <label >Price</label>
     <input type="text" />
     <label >Category</label>
     <input type="text" />
     <label >Best seller</label>
     <input type="text" />
     <label >Description</label>
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

export default AddProduct