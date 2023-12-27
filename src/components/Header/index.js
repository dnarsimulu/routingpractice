// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-bgcontainer">
    <div className="img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="image"
        alt="wave"
      />
      <h1 className="nav-heading">Wave</h1>
    </div>
    <ul className="component-container">
      <li>
        <Link className="nav-heading" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-heading" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-heading" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
