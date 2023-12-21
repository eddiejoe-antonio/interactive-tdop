import React from "react";
import ButtonLight from "./ButtonLight";
import Fetch from "./Fetch.jsx";
import SingleStackedBarChart from "./TestChart.jsx";

const ScrollContainer = ({title, text, buttonText, imgHolder}) => {
    return ( 
        <div className="h-screen">
            <div>
                <h3 className="uppercase text-xs">{title}</h3>
                <p className="font-sans">{text}</p>
            </div>
            <div className="mt-[10vh] bg-red">
                {/* <DumbbellChart data={data}/> */}
                <SingleStackedBarChart width={400} height={50} value={68} />
               {/* <Fetch /> */}
                {/* <TestChart /> */}
                {/* <img src={imgHolder} /> */}
            </div>
            <div className="mt-[10vh]">
                <ButtonLight classname='mt-50vh' text={buttonText} />
            </div>
        </div>
     );
}
 
export default ScrollContainer;