import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <Link className="nav" to="/stays">
        Stays
      </Link>
      <Link className="nav" to="/home" data-state="active">
        Flights
      </Link>
      <Link className="nav" to="/cars">
        Cars
      </Link>
      <Link className="nav" to="/packages">
        Packages
      </Link>
    </header>
  );
};