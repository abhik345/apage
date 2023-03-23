// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome, faUser, faCog } from "@fortawesome/free-solid-svg-icons";
// import "C:/Users/Abhik/Desktop/deep thoughs/apage/src/components/NavigationStyles.css";
// import logo from "C:/Users/Abhik/Desktop/deep thoughs/apage/src/logo.svg";

// const NavigationBar = () => {
//   return (
//     <div>
//       <nav>
//         <img src={logo} alt="logo" />
//         <ul id="navbar">
//           <li>
//             <FontAwesomeIcon icon={faHome} class="icon " />
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faUser} class="icon " />
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faCog} class="icon " />
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default NavigationBar;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./NavigationStyles.css";
import logo from "C:/Users/Abhik/Desktop/deep thoughs/apage/src/logo.svg";

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-buttons">
        <button className="navbar-button">
          <FontAwesomeIcon
            icon={faHome}
            style={{ color: "rgba(54, 131, 240, 1)" }}
          />
        </button>
        <button className="navbar-button">
          <FontAwesomeIcon
            icon={faBell}
            style={{ color: "rgba(54, 131, 240, 1)" }}
          />
        </button>
        <button className="navbar-button">
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ color: "rgba(54, 131, 240, 1)" }}
          />
        </button>
      </div>
      <button className="burger-menu" onClick={toggleMenu}>
        <div className="burger-menu-line"></div>
        <div className="burger-menu-line"></div>
        <div className="burger-menu-line"></div>
      </button>
      {isMenuOpen && (
        <div className="menu">
          <ul className="menu-list">
            <li className="menu-item">Menu item 1</li>
            <li className="menu-item">Menu item 2</li>
            <li className="menu-item">Menu item 3</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavigationBar;
