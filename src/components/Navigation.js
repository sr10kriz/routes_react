import { NavLink } from "react-router-dom";

import "./Navigation.css";

function Navigation () {
    return <>
        <nav>
            <div>
                <input className="input_search" type="search" placeholder="Search here" />
            </div>
            <div>
                <NavLink
                 to="/" 
                 id="link_home" 
                 className={({isActive}) => (isActive) ? "links active" : "links"} 
                 end /* this indicates that the links should only be considered active if the currently active route ends with the path to="/" */
                 >
                    Home
                </NavLink>
            </div>
            <div>
                <NavLink
                 to="/products" 
                 id="link_products" 
                 className={({isActive}) => (isActive) ? "links active" : "links"}> {/* this className not expects string it expects a function with object as a parameter => isActive a special parameter for NavLink from react-router-dom  */}
                    Products
                </NavLink>
            </div>
        </nav>
    </>
}

export default Navigation;