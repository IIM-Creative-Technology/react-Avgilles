import '../sass/component/_404.scss';
import Gif404 from '../images/404.gif';


export default function ErrPage() {
    return (

    <>
        <section className="errpage">
            <h3>Erreur 404</h3>
            <img src={Gif404}></img>
        </section>
    </>

    );
  }