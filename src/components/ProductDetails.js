import { useParams, Link } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {
  const params = useParams();

  return (
    <>
      <div className="p_details_div">
        <p className="p_details_message">Product Details</p>
        <h1>{params.productId}</h1>
      </div>
      <div className="back-link-div">
        <Link to=".." relative="path">
          Back
        </Link>
      </div>
    </>
  );
}

export default ProductDetails;
