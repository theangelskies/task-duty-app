import React from "react";
import navLogo from "/nav-logo.svg";
import { Link, useMatch } from "react-router-dom";
import NavLinks from "../components/NavLinks";

const Navbar = () => {
  const isTask = useMatch("/all-tasks");
  const isNew = useMatch("/new-task");
  return (
    <>
      <nav className="wrapper flex justify-between border-b-1 border-b-[#B8B6B6]">
        {/* nav-logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img src={navLogo} alt="nav-logo" className="w-[39px]" />
            <span className="font-[600] text-[27px] text-[#2D0050]">
              {" "}
              TaskDuty{" "}
            </span>
          </Link>
        </div>
          <NavLinks isTask={isTask} isNew={isNew}/>
      </nav>
    </>
  );
};

export default Navbar;
