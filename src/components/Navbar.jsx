import React from "react";

export const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="links">
            <img src="./img/logo.png" alt="" className="logo"/>
            <ul className="nav_items">
                <li className="nav_link">
                    <a href="#" className="active">Home</a>
                </li>
                <li className="nav_link">
                <a href="#" className="">About</a>
                </li>
                <li className="nav_link">
                <a href="#" className="">Our Work</a>
                </li>
                <li className="nav_link">
                <a href="#" className="">Contact</a>
                </li>
            </ul>
        </div>
        <div className="icons">
            <img src="./img/search.png" alt="" className="search"/>
            <button className="hire_btn">Hire Me</button>
        </div>
      </div>
    </>
  );
};
