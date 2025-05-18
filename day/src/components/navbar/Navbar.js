import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GlobalContext } from "../../context/GlobalState";

const Navbar = () => {
  const { cart } = useContext(GlobalContext);
  return (
    <div className="navbar">

      <ul className="navbar-ul">
    
        <Link  to="/">
          <li>Home</li>
        </Link>

        <Link to="/men">
          <li>Mens</li>
        </Link>


        <Link to="/cloth">
          <li>Clothes</li>
        </Link>
        
        <Link to="/call">
          <li>Call</li>
        </Link>

        <Link to="/cart">
          <li>
            &#128722;{" "}
            <span className="card-count" >
              ({cart.length})
            </span>
          </li>
        </Link>
        <Link to="/orders">
          <li>Orders</li>
        </Link>

      </ul>
    </div>
  );
};

export default Navbar;
