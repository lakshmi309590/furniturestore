import React from "react";
import "./header.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

function Header() {
    return (
        <header className="header">
            {/* Top Row */}
            <div className="header__top">
                <div className="header__logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="header__icons">
                    <Link to="/wishlist"><FaHeart /></Link>
                    <Link to="/cart"><FaShoppingCart /></Link>
                    <Link to="/profile"><FaUser /></Link>
                </div>
            </div>

            {/* Bottom Row */}
            <nav className="header__bottom">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sofa">Sofas&Armchairs</Link></li>
                    <li><Link to="/contact">Tables</Link></li>
                    <li><Link to="/contact">Bed&Mattressess</Link></li>
                    <li><Link to="/contact">Lamps and Lighting</Link></li>
                    <li><Link to="/contact">Decoration</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
