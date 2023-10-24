import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="Contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
