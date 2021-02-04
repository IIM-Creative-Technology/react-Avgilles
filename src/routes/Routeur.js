import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Days from '../components/Prevision'

import Cards from '../components/Card';

export default function AllQuizz() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Days/>
                <ul>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
              </ul>
            </Route>
            <Route path="/about">
                <h2>about</h2>
                <li>
                    <Link to="/">Home</Link>
                  </li>
            </Route>
            <Route path="/dashboard">
                <Cards />
                <li>
                    <Link to="/">Home</Link>
                  </li>
            </Route>
            <Route path="*">
                <h2>404</h2>

                <Link to="/">Home</Link>
            </Route>
          </Switch>

        </div>
      </Router>
    );
  }