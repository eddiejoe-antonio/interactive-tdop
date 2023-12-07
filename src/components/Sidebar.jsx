import React from "react";
import SidebarItems from './SidebarItems'
import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar(props, {defaultActive}) {
    const [activeIndex, ] = useState(defaultActive || 1);
    return (
        <>
            <div className="z-10 hidden md:flex md:fixed left-10 top-1/2 transform -translate-y-1/2 p-4 flex-col uppercase">
            {
                SidebarItems.map((item, index)=> (
                    <Link to={item.route}>
                    <div key={item.name} active={index === activeIndex}>
                        <p>{item.name}</p>
                    </div>
                    </Link>
                ))
            }
            </div>
        </>
    );
}

export default Sidebar