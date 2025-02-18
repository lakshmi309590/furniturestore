import React, { useContext } from "react";
import "./header.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { myContext } from "../../App";

function Header() {
    const { cartItems } = useContext(myContext);
    const cartCount = cartItems.reduce((total, item) => total + item.qty, 0);
    return (
        <header className="header">
            {/* Top Row */}
            <div className="header__top">
                <div className="header__logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="header__icons">
                    <Link to="/wishlist"><FaHeart /></Link>
                    <Link to="/cart" className="cart-link">
                        <FaShoppingCart />
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </Link>
                    <Link to="/profile"><FaUser /></Link>
                </div>
            </div>

            {/* Bottom Row */}
            <nav className="header__bottom">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/sofa">Sofas&Armchairs</Link></li>
                    <li><Link to="/tables">Tables</Link></li>
                    <li><Link to="/bed">Bed&Mattressess</Link></li>
                    <li><Link to="/lamp">Lamps and Lighting</Link></li>
                    <li><Link to="/decore">Decoration</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
