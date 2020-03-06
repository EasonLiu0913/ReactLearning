import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        <NavLink className="navbar-brand" to="/">
          logo
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/"
              >
                產品列表
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/product"
              >
                產品
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/cart">
                購物車
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Menu
