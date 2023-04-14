import "./Products.css";
import { useNavigate } from "react-router-dom";

function Products () {

    const navigateTo = useNavigate(); 
    const productCarHandler = () => {
        navigateTo('/product-categories');
    }

    return <>
        <div className="products_div">
            <p className="products_message">Products</p>
        </div>
        <div className="products_btn">
        <button onClick={productCarHandler}>Product Categories</button>
        </div>
    </>
}

export default Products;