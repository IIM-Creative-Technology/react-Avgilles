import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import '../sass/component/_404.scss';


export default function ErrPage() {
    return (

    <>
        <section className="errpage">
            <h3>Erreur 404</h3>
        </section>
        <li>
            <Link to="/">Home</Link>
        </li>
    </>

    );
  }