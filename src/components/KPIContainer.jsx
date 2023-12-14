import React from "react";
import ButtonLight from "./ButtonLight";

const KPIContainer = ({goal, kpi, description}) => {
    return ( 
        <div className="px-4 py-[12vh] font-sans mr-[1vw] bg-[rgba(0,0,0,0.25)] text-white border-2 border-white">
            <div>
                <p className="text-xs text-[#ececec]">{goal}</p>
                <p className="uppercase text-lg">{kpi}</p>
                <p className="text-xs">{description}</p>
            </div>
        </div>
     );
}
 
export default KPIContainer;