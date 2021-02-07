import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Days from '../components/Prevision'
import ErrPage from '../components/404';

import Quizz from '../components/Quizz';
import '../sass/component/_cards.scss';
import '../sass/component/_nav.scss';

import dataQ from '../data/Quizz.json';


export default function AllQuizz() {
    return (
      <Router>

            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/quizz_1">Quizz 1</Link>
                <Link to="/quizz_2">Quizz 2</Link>
                <Link to="/quizz_3">Quizz 3</Link>
                <Link to="/quizz_4">Quizz 4</Link>

            </nav>
            <Switch>

              <Route exact path="/">
                  <Days/>             
              </Route>
              <Route path="/quizz_1">
                <Quizz  nq="1" infoData={dataQ.Quizz_1} titleTheme="Quizz N°1: Culture Géographique"/>
                {console.log(dataQ)}
              </Route>
              <Route path="/quizz_2">
                <Quizz  nq="2" infoData={dataQ.Quizz_2} titleTheme="Quizz N°2: Culture Générale"/>
              </Route>
              <Route path="/quizz_3">
               <Quizz  nq="3" infoData={dataQ.Quizz_3} titleTheme="Quizz N°3: Culture Générale"/>
              </Route>
              <Route path="/quizz_4">
               <Quizz nq="4" infoData={dataQ.Quizz_4} titleTheme="Quizz N°4: Culture Cinématographique"/>
              </Route>

              <Route path="*" component={ErrPage}></Route>

          </Switch>
      </Router>
    );
  }