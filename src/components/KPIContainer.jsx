import React from "react";
import ButtonLight from "./ButtonLight";

const KPIContainer = ({goal, kpi, description}) => {
    return ( 
        <div className="px-4 py-[10vh] font-sans mr-[1vw] text-white border-2 border-white">
            <div>
                <p className="text-xs text-[#ececec]">{goal}</p>
                <p className="uppercase text-lg">{kpi}</p>
                <p className="text-xs">{description}</p>
            </div>
        </div>
     );
}
 
export default KPIContainer;