import React, { useContext } from "react";
import Header from "../components/header/header";
import Banner from "../components/Banner/banner";
import { myContext } from "../App";
import "./Home.css";
import Footer from "../components/Footer/footer";

function Home() {
  const { sharedValue } = useContext(myContext);

  return (
    <div>
      <Header />
      <Banner /> {/* Add the Sliding Banner Here */}
      <div className="productItem">
        {sharedValue.map((item, index) => (
          <div key={index} className="product-card">
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} width="100" />
            <p>Category: {item.category}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.qty}</p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
