import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Days from '../components/Prevision'
import ErrPage from '../components/404';
// import Cards from '../components/Card';


import Quizz from '../components/Quizz';
import dataQ1 from '../data/Quizz_1.json';
import '../sass/component/_cards.scss';
import '../sass/component/_nav.scss';




// const Listequizz = (props) => {
//   const titlequizz = props.infoData.map((data, index) => {
//       return(
//           <section className="cards" key={index}>
//                <Link to={"/quizz/"+data.title}>{data.title}</Link>

//                <Route path={"quizz/"+data.title} component={Quizz}></Route>
//           </section>
//       );
//   });

//   return <section>{titlequizz}</section>;
// }



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
                {console.log(dataQ1.Quizz_1.length, "dataQ1")}
                <Quizz infoData={dataQ1.Quizz_1}/>
              </Route>
              <Route path="/quizz_2"/>
              <Route path="/quizz_3"/>
              <Route path="/quizz_4"/>

              <Route path="*" component={ErrPage}></Route>

          </Switch>
      </Router>
    );
  }