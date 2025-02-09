import React,{useContext} from "react";
import { myContext } from "../../App";
import { FaRegHeart } from "react-icons/fa"; 
import "./LikedButton.css"


function LikedButton({item}){
    const {wishlist,setWishlist}=useContext(myContext)
    function handleLike(){
        if(wishlist.some((wishlistProd)=>wishlistProd.id===item.id)){
            setWishlist(wishlist.filter((wishlistProd) => wishlistProd.id !== item.id));

        }else{
            setWishlist([...wishlist,item])
        }
    }
    return(
        <>
         <button className="wishlist-btn" onClick={handleLike}>
            <FaRegHeart className="wishlist-icon" />
          </button>
        </>
    )
}

export default LikedButton