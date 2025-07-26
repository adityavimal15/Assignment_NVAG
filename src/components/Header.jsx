import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <NavLink className="nav" to="/stays">
        Stays
      </NavLink>
      <NavLink className="nav" to="/" data-state="active">
        Flights
      </NavLink>
      <NavLink className="nav" to="/cars">
        Cars
      </NavLink>
      <NavLink className="nav" to="/packages">
        Packages
      </NavLink>
    </header>
  );
};