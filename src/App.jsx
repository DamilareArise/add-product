import React, { useState } from "react";
import ProductTable from "./components/ProductTable";
import AddProduct from "./components/AddProduct";
import NavBar from "./components/NavBar";

const App = () => {
  const [productName, setproductName] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productImage, setproductImage] = useState("");
  const [quantityLeft, setquantityLeft] = useState("");
  const [productList, setproductList] = useState([]);

  const addProduct = () => {

    let product = {
      productName,
      productPrice,
      productImage,
      quantityLeft,
    };

    if (productName == '' || productPrice == ''){
      alert("Please fill all the fields")
    }
    else{
      setproductList([...productList, product]);
      resetInput();
    }
  };

  const deleteProduct = (index) => {
    let newProductList = [...productList];
    newProductList.splice(index, 1);
    setproductList(newProductList);
  };

  const startEditing = (index) => {
    let product = productList[index];
    setproductName(product.productName);
    setproductPrice(product.productPrice);
    setproductImage(product.productImage);
    setquantityLeft(product.quantityLeft);
  };

  const editProduct = (index) => {
    let newProductList = [...productList];
    newProductList[index].productName = productName;
    newProductList[index].productPrice = productPrice;
    newProductList[index].productImage = productImage;
    newProductList[index].quantityLeft = quantityLeft;
    setproductList(newProductList);
  };

  const resetInput = () => {
    setproductName("");
    setproductPrice("");
    setproductImage("");
    setquantityLeft("");
  };
  return (
    <>
      <NavBar/>
      <section className="container-fluid my-3">
        <div className="row" style={{ height: "60dvh" }}>
          
          <AddProduct
            productName={productName}
            productPrice={productPrice}
            productImage={productImage}
            quantityLeft={quantityLeft}
            setproductName={setproductName}
            setproductPrice={setproductPrice}
            setproductImage={setproductImage}
            setquantityLeft={setquantityLeft}
            addProduct = {addProduct}

          />

          <ProductTable
            productList={productList}
            productName={productName}
            productImage={productImage}
            productPrice={productPrice}
            quantityLeft={quantityLeft}
            deleteProduct = {deleteProduct}
            startEditing = {startEditing}
            editProduct = {editProduct}
            setproductName = {setproductName}
            setproductImage = {setproductImage}
            setproductPrice = {setproductPrice}
            setquantityLeft = {setquantityLeft}


          />

          
        </div>
      </section>
    </>
  );
};

export default App;
