import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const SharedLayout = ({ user }) => {
  return (
    <div className="container">
      <header>
        <nav className="navbar">
          <img className="nike-logo-img" src="../images/nike-logo.svg"></img>
          <ul className="nav-links">
            <li>
              <NavLink to="/" activeClassName="active" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalog" activeClassName="active">
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink to="/addproduct" activeClassName="active">
                Add Product
              </NavLink>
            </li>
          </ul>
          {user && <div className="user-info">Hello, {user.name}</div>}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2023 ShoeStore. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default SharedLayout;
