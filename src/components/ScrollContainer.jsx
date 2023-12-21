import React from "react";
import ButtonLight from "./ButtonLight";
import Fetch from "./Fetch.jsx";

const ScrollContainer = ({title, text, buttonText, imgHolder}) => {
    const data = [
        { name: "Item A", startValue: 3000, endValue: 6400 },
        { name: "Item B", startValue: 3000, endValue: 8398 },
        { name: "Item C", startValue: 3000, endValue: 9800 },
        // ... more data ...
    ];

    return ( 
        <div className="h-screen">
            <div>
                <h3 className="uppercase text-xs">{title}</h3>
                <p className="font-sans">{text}</p>
            </div>
            <div className="mt-[10vh] bg-red">
                {/* <DumbbellChart data={data}/> */}
               <Fetch />
                {/* <TestChart /> */}
                {/* <img src={imgHolder} /> */}
            </div>
            <div className="mt-[20vh]">
                <ButtonLight classname='mt-50vh' text={buttonText} />
            </div>
        </div>
     );
}
 
export default ScrollContainer;