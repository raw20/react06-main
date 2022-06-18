import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  const naviList = [
    { content: "Main", href: "" },
    { content: "Review", href: "review" },
    { content: "CardList", href: "cardList" },
    { content: "Notice", href: "notice" },
    { content: "Event", href: "event" },
  ];
  return (
    <div id="nav">
      <h2 className="blind">Main Menu</h2>
      <ul>
        {naviList.map((ele, index) => (
          <li key={index}>
            <NavLink
              to={ele.href}
              className={({ isActive }) =>
                isActive ? "navList on" : "navList"
              }
            >
              {ele.content}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
