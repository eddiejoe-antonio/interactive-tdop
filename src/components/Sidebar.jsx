import React, {useState} from "react";
import SidebarItems from './SidebarItems';
import { Link } from "react-scroll";

function Sidebar({ currentPage }) {
  console.log(currentPage);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* Primary Navigation - Left Side */}
      <div className="z-50 hidden md:block md:fixed left-10 top-1/2 transform -translate-y-1/2 w-40 flex-col uppercase">
        {SidebarItems.map((item, index) => (
          <Link
            key={item.key}
            to={item.route}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className={`p-1 text-xs hover:text-[#dedede] ${index === activeIndex ? 'font-bold' : 'font-regular'}`}
            activeClass="font-bold"
            onSetActive={() => setActiveIndex(index)}
          >        
            <p>{item.name}</p>
          </Link>
        ))}
      </div>

      {/* Secondary Navigation - Right Side */}
      {currentPage && currentPage.sections && (
        <div className="z-50 hidden md:flex md:fixed right-10 top-1/2 transform -translate-y-1/2 w-40 flex-col uppercase">
          {currentPage.sections.map((section, index) => (
            <Link
              key={index}
              to={`${currentPage.name}-${section}`} // e.g., "intro-section1"
              smooth={true}
              offset={0}
              duration={500}
              className="p-1 text-xs hover:text-[#dedede]"
            >
              {`Section ${index + 1}`}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default Sidebar;
