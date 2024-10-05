import React from "react";
import { Link } from "react-router-dom";

const Header = ({count}) => {
  console.log("header render oldu");
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/contact-messages"}>Contact Messages</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default React.memo(Header); //render olmasi gerekmeyen yerler
