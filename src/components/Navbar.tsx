import * as React from "react"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="bg-green-600 shadow h-16 flex items-center justify-between p-4">
      <h1 className="text-xl font-bold text-white">Name</h1>
      <ul className="flex space-x-4 text-white font-medium">
        <li>
          <NavLink to="/" exact={true} activeClassName="pb-1 border-b-2">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" exact={true} activeClassName="pb-1 border-b-2">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" exact={true} activeClassName="pb-1 border-b-2">
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
