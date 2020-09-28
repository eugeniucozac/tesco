import { ShoppingPage } from "containers/Shopping"
import { CartPage } from "containers/Cart"
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ShoppingPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
