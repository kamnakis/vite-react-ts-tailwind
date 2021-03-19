import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

// Components
import { Navbar } from "../components/Navbar"

// Views
import { About } from "../views/About"
import { Home } from "../views/Home"
import { Users } from "../views/Users"

export const MainLayout = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
          <Route path="/" component={Home} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </Router>
  )
}
