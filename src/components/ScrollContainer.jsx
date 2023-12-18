import React from "react";
import ButtonLight from "./ButtonLight";
import Fetch from "./Fetch";

const ScrollContainer = ({title, text, buttonText, imgHolder}) => {
    return ( 
        <div className="h-screen">
            <div>
                <h3 className="uppercase text-xs">{title}</h3>
                <p className="font-sans">{text}</p>
            </div>
            <div className="mt-[10vh] bg-red">
                {/* <Fetch /> */}
                <img src={imgHolder} />
            </div>
            <div className="mt-[20vh]">
                <ButtonLight classname='mt-50vh' text={buttonText} />
            </div>
        </div>
     );
}
 
export default ScrollContainer;