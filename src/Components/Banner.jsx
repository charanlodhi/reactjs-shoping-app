import React from "react";
import Image from '../Assets/mobile-phone.jpg';
function Banner() {
    
    const bannerText = "KEEP WALKING INTO RIGHT DIRECTION";
    return(
        <div className="bannerImg">
            <img src={Image} alt="" />
            <div className="bannerText"> {bannerText} </div>
        </div>
    )
}
export default Banner;