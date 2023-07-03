import React from "react"
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <React.Fragment>
      {/* Logo */}
      <h1 className="header__logo">
        <Link to="/home">
          DUROTAN
        </Link>
      </h1>
      {/* End logo */}
    </React.Fragment>
  )
}