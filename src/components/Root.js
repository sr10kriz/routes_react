import "./Root.css";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

function Root () {
    return <>
        <Navigation />
        <Outlet />
    </>
}

export default Root;