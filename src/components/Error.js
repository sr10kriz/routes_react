import "./Error.css";
import Navigation from "./Navigation";

function Error () {
    return <>
        <Navigation />
        <div className="error_div">
            <p className="error_message">the requested url seems to be unavailable &#128560;</p>
        </div>
    </>
}

export default Error;