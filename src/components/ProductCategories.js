import "./ProductCategories.css";
import { Link } from "react-router-dom";

function ProductCategories() {
  const productsCategories = [
    { id: "pc1", title: "Jbl Headphones" },
    { id: "pc5", title: "Pillows & Bedsheets" },
    { id: "pc3", title: "Travel Partners" },
    { id: "pc8", title: "Iphones" },
    { id: "pc9", title: "Laptops" },
  ];
  return (
    <>
      <div className="p_categories_div">
        <p className="p_categories_message">Product Categories</p>
      </div>
      <div>
        <ul>
          {productsCategories.map((productsCat) => (
            <li key={productsCat.id}>
              <Link to={`/product-categories/${productsCat.id}`}>
                {productsCat.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductCategories;
