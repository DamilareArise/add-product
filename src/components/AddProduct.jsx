import React from 'react'

const AddProduct = ({
    addProduct,
    productName,
    productPrice,
    productImage,
    quantityLeft,
    setproductName,
    setproductPrice,
    setproductImage,
    setquantityLeft,

}) => {
  return (
    <>
        <div className="col-md-4 shadow-sm">
            <input
              type="text"
              placeholder="Product Name"
              className="form-control my-2"
              value={productName}
              onChange={(e) => setproductName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Product Price"
              className="form-control my-2"
              value={productPrice}
              onChange={(e) => setproductPrice(e.target.value)}
            />
            <input
              type="text"
              placeholder="Product Image"
              className="form-control my-2"
              value={productImage}
              onChange={(e) => setproductImage(e.target.value)}
            />
            <input
              type="text"
              placeholder="Quantity Left"
              className="form-control my-2"
              value={quantityLeft}
              onChange={(e) => setquantityLeft(e.target.value)}
            />
            <button className="btn btn-success w-100" onClick={addProduct}>
              Add Product
            </button>
        </div>
    </>
  )
}

export default AddProduct