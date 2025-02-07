import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./banner.css";

function Banner(){
    const bannerImage=[ "https://ii1.pepperfry.com/media/catalog/product/c/l/764x840/clifford-sheesham-wood-queen-size-bed-in-scratch-resistant-honey-oak-finish-clifford-sheesham-wood-q-kkij9r.jpg",
        "https://ii3.pepperfry.com/media/catalog/product/m/i/494x544/milton-3-seater-velvet-sofa-in-green-colour-by-home-lifestylez-milton-3-seater-velvet-sofa-in-green--vab3pt.jpg",
        "https://ii2.pepperfry.com/media/catalog/product/k/e/494x544/kentan-sheesham-wood-4-seater-dining-table-in-rustic-teak-finish-with-drawer-kentan-sheesham-wood-4--86pafo.jpg",
        "https://ii1.pepperfry.com/media/catalog/product/h/a/764x840/halcyon-brown-porcelain-vase-halcyon-brown-porcelain-vase-kbvfpj.jpg",
        "https://ii1.pepperfry.com/media/catalog/product/h/u/764x840/hut-shape-battery-operated-decorative-festive-latern-diya--assorted--hut-shape-battery-operated-deco-tj6dal.jpg",
        ]
        const setting={
            dots:true,
            infinite:true,
            speed:500,
            slidesToShow:1,
            slidesToScroll: 1,   
            autoplay: true, 
            autoplaySpeed: 3000,
            arrows: false, 
        }
  return(
    <div className="banner">
     
       <Slider {...setting}>
{
    bannerImage.map((image,index)=>(
        <div key={index} className="slide">
            <img src={image} alt={`Banner ${index + 1}`} />
          </div>
    ))
}
       </Slider>
    </div>
  )
}

export default Banner