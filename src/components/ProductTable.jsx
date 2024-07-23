import React from "react";

const ProductTable = ({
  productList,
  productName,
  productPrice,
  productImage,
  quantityLeft,
  deleteProduct,
  startEditing,
  editProduct,
  setproductName,
  setproductPrice,
  setproductImage,
  setquantityLeft


}) => {
  return (
    <>
      <div className="col-md-8 shadow-sm">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <img src={product.productImage} alt="" height={40} />
                </td>
                <td>{product.productName}</td>
                <td>{product.productPrice}</td>
                <td>{product.quantityLeft}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => startEditing(index)}
                  >
                    Edit
                  </button>

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Edit Product
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="mb-3">
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
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
                            onClick={() => editProduct(index)}
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteProduct(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductTable;
