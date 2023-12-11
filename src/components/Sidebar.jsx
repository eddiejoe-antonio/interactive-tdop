import React from "react";
import SidebarItems from './SidebarItems';
import { Link } from "react-scroll";
import { useState } from "react";

function Sidebar(props, { defaultActive }) {
  const [activeIndex, setActiveIndex] = useState(defaultActive || 1);

  return (
    <>
      <div className="z-50 hidden md:block md:fixed left-10 top-1/2 transform -translate-y-1/2 w-40 flex-col uppercase">
        {SidebarItems.map((item, index) => (
          <Link
            key={item.key}
            to={item.route}
            spy={true}
            smooth={true}
            offset={0} // Adjust the offset as needed to ensure proper scrolling to the section
            duration={500}
            className={`py-20 text-xs hover:text-[#dedede] ${
              index === activeIndex ? 'font-bold' : 'font-regular'
            }`}
            activeClass="font-bold"
            onSetActive={() => setActiveIndex(index)}
          >        
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Sidebar;


// import React from "react";
// import SidebarItems from './SidebarItems'
// import { Link } from "react-router-dom";
// import { useState } from "react";


// function Sidebar(props, {defaultActive}) {
//     const [activeIndex, setActiveIndex] = useState(defaultActive || 1);
//     return (
//         <>
//             <div className="z-0 hidden md:block md:fixed left-10 top-1/2 transform -translate-y-1/2 w-40 flex-col uppercase">
//             {
//                 SidebarItems.map((item, index)=> (
//                     <Link to={item.route}>
//                     <div key={item.key} active={index = activeIndex} className="py-2 text-xs hover:font-bold">
//                     {/* <div key={item.key} active={index = activeIndex} className={props.route ? `font-semibold` : `font-regular`}> */}
//                         <p>{item.name}</p>
//                     </div>
//                     </Link>
//                 ))
//             }
//             </div>
//         </>
//     );
// }

// export default Sidebar