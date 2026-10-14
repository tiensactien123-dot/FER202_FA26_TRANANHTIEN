import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Lab5</NavLink>
        <NavLink className="nav-link text-white" to="/">Home</NavLink>
        <NavLink className="nav-link text-white" to="/about">About</NavLink>
        <NavLink className="nav-link text-white" to="/new">New</NavLink>
        <NavLink className="nav-link text-white" to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;