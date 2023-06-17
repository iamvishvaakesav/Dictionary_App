import React, { useState } from "react";

import { ReactComponent as MonospaceIcon } from "../../assets/monospace.svg";
import { ReactComponent as SansSerifIcon } from "../../assets/sansSerif.svg";
import { ReactComponent as SerifIcon } from "../../assets/serif.svg";
import { ReactComponent as ThemeIcon } from "../../assets/theme.svg";
import "./Navbar.css";

function Navbar() {
  const [currentFont, setCurrentFont] = useState("Serif");
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <h3 className="title"> Dictionary.</h3>
        </div>
        <ul className="navbarNav">
          <div className="navItem dropdownIcon" onClick={() => setOpen(!open)}>
            {<Dropdown />}
          </div>
          <div className="navItem verticalBar"> </div>
          <div className="navItem">{<Toggle />}</div>
          <div className="navItem">
            {<ThemeIcon className="themeIcon"></ThemeIcon>}
          </div>
        </ul>
      </nav>
    </div>
  );

  function Dropdown() {
    return (
      <>
        {(currentFont === "Serif" && (
          <SerifIcon className="icon"></SerifIcon>
        )) ||
          (currentFont === "Sans-Serif" && (
            <SansSerifIcon className="icon" />
          )) ||
          (currentFont === "Monospace" && <MonospaceIcon className="icon" />)}

        {open && <DropdownMenu />}
      </>
    );
  }

  function DropdownMenu() {
    return (
      <div className="dropdownMenu">
        <DropdownItem name="Serif" icon={<SerifIcon className="icon" />} />
        <DropdownItem
          name="Sans-Serif"
          icon={<SansSerifIcon className="icon" />}
        />
        <DropdownItem
          name="Monospace"
          icon={<MonospaceIcon className="icon" />}
        />
      </div>
    );
  }

  function DropdownItem(props) {
    return (
      <div
        className="dropdownItem"
        onClick={() => {
          setCurrentFont(props.name);
          if (props.name === "Serif") {
            document.body.style.fontFamily = "Merriweather";
          }
          if (props.name === "Sans-Serif") {
            document.body.style.fontFamily = "Lato";
          }
          if (props.name === "Monospace") {
            document.body.style.fontFamily = "IBM Plex Mono";
          }
        }}
      >
        <span>{props.name}</span>
        <span>{props.icon}</span>
      </div>
    );
  }

  function Toggle() {
    return (
      <label className="toggleContainer">
        <input type="checkbox" id="themeSwitch" onClick />
        <span className="toggle"></span>
      </label>
    );
  }
}

export default Navbar;
