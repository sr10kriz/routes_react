import "./Products.css";
import { Link, useNavigate } from "react-router-dom";

function Products() {
  const productsList = [
    { id: "pc1-101", title: "Jbl 13Pro TWS", price: "600" },
    { id: "pc5-501", title: "Car Pillows", price: "1000" },
    { id: "pc3-301", title: "American Tourister Trolleys", price: "5999" },
    { id: "pc8-801", title: "Iphone 14 Pro Max", price: "145000" },
    { id: "pc9-901", title: "Lenovo ThinkBook 13 Gen11", price: "42999" },
  ];
  const navigateTo = useNavigate();
  const productCarHandler = () => {
    navigateTo("/product-categories");
  };

  return (
    <>
      <div className="products_div">
        <p className="products_message">Products</p>
      </div>
      <div>
        <ul>
          {productsList.map((products) => (
            <li key={products.id}>
              <Link to={`/products/${products.id}`}>{products.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="products_btn">
        <button onClick={productCarHandler}>Product Categories</button>
      </div>
    </>
  );
}

export default Products;
