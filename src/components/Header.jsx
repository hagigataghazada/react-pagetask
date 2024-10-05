import React from 'react'
import { Link } from 'react-router-dom'

const Header = (count) => {

    console.log("header render oldu");
  return (
    <div><ul>
    <li>
      <Link to={"/"}>Home</Link>
    </li>
    <li>
      <Link to={"/about"}>About</Link>
    </li>
    <li>
      <Link to={"/contact"}>Contact</Link>
    </li>
  </ul>
    <hr />
    <h1>Header count: {count}</h1>
  </div>
  )
}

export default React.memo(Header); //render olmasi gerekmeyen yerler