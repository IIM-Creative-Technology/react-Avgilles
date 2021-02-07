import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import '../sass/component/_cards.scss';


const Cards = (props) => {
    const { infoData } = props;
        return(
            <>
                <Listequizz infoData={Data} />
                <li>
                    <Link to="/">Home</Link>
                </li>
            </>
        )
    }

export default Cards;