import React,{ useState } from "react";

function Dropdown () {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <div>
        <div>
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
        <h3>The Kiet<br/><span>Website Designer</span></h3>
        <ul>
        <DropdownItem text = {"My Profile"}/>
        <DropdownItem text = {"Edit Profile"}/>
        <DropdownItem text = {"Inbox"}/>
        <DropdownItem text = {"Settings"}/>
        <DropdownItem text = {"Helps"}/>
        <DropdownItem text = {"Logout"}/>
        </ul>
        </div>
        </div>
        </div>
    );
}

function DropdownItem(props){
    return(
        <li className = 'dropdownItem'>
        <a> {props.text} </a>
        </li>
    );
}

export default Dropdown;