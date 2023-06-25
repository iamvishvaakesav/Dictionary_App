import React, { useState } from "react";

import { ReactComponent as MonospaceIcon } from "../../assets/monospace.svg";
import { ReactComponent as SansSerifIcon } from "../../assets/sansSerif.svg";
import { ReactComponent as SerifIcon } from "../../assets/serif.svg";
import { ReactComponent as ThemeIcon } from "../../assets/theme.svg";
import "./Navbar.css";

function Navbar() {
  const [currentFont, setCurrentFont] = useState("Serif");
  const [open, setOpen] = useState(false);

  // Handler Functions
  const handleDropDownState = () => {
    setOpen(!open);
  };

  function handleFontChange(name) {
    setCurrentFont(name);
    if (name === "Serif") {
      document.body.style.fontFamily = "Merriweather";
    }
    if (name === "Sans-Serif") {
      document.body.style.fontFamily = "Lato";
    }
    if (name === "Monospace") {
      document.body.style.fontFamily = "IBM Plex Mono";
    }
  }
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <h3 className="title"> Dictionary.</h3>
        </div>
        <ul className="navbarNav">
          <div className="navItem dropdownIcon" onClick={handleDropDownState}>
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
        onClick={() => handleFontChange(props.name)}
      >
        <span>{props.name}</span>
        <span>{props.icon}</span>
      </div>
    );
  }

  function Toggle() {
    return (
      <label className="toggleContainer">
        <input
          type="checkbox"
          id="themeSwitch"
          onChange={(e) => {
            document.body.classList.toggle("dark");
          }}
        />
        <span className="toggle"></span>
      </label>
    );
  }
}

export default Navbar;
