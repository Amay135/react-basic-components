import React from 'react';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Pokedex</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item active mx-3">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="#">Pricing</a>git remote add origin https://github.com/username/nama-repo.git

          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="#">Disabled</a>
          </li>
          <button className="btn btn-outline-success my-2 my-sm-0 mx-3">Login</button>
        </ul>
      </div>
      
    </nav>
  );
}