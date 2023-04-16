import { useParams, Link } from "react-router-dom";
import "./ProductCategoriesDetails.css";

function ProductCategoriesDetails() {
  const params = useParams(); // gives us access to the currently active route parameters, values encoded in the url for our path segments

  return (
    <>
      <div className="p_cat_details_div">
        <p className="p_cat_details_message">Product Category Details</p>
        <h1>{params.productCatId}</h1>
      </div>
      <div className="back-link-div">
        <Link to=".." relative="path">
          Back
        </Link>
        {/* the two dots means it is a relative path
        the special prop of Link tag is relative prop its default value is "route" means it leads to the root route, if we use "path" insead to of "route" it lead to previously active route */}
      </div>
    </>
  );
}

export default ProductCategoriesDetails;
