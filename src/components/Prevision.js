import React, {useState, useEffect} from "react";
import '../sass/component/_prev.scss'

export default function Days(props) {

    let date = new Date();
  
    const week = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi"
    ];
    const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
    ];
    let fullDate = `${week[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;

    //---------------------UseState-----------------------//


    const apiKey = '8d937ada21412cefa14b958644910f95';
    const ville = 'Nantes';
    const [city, setCity] = useState('');
    const [meteoDesc, setMeteoDesc] = useState('');
    const [temp, setTemps] = useState('');
    const [pays, setPays] = useState('');
    const [img, setImg] = useState('');
    const [heures, setHeures] = useState('');
    const [minutes, setMinutes] = useState('');


    //-----------Appelle de l'API--------------//


    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ville}&APPID=${apiKey}&lang=fr&units=metric`)
        .then(res => res.json())
        .then(data => {
            setCity(data.name);
            setMeteoDesc(data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1));
            setTemps(data.main.temp.toFixed(1));
            setPays(data.sys.country);
            setImg(data.weather[0].icon);

            setInterval(function heure(){
            let h = new Date().getHours();
            h = (h < 10) ? `0${h}` : h;
            setHeures(h);
        }, 600);
        setInterval(function minutes(){
            let min = new Date().getUTCMinutes();
            min = (min < 10) ? `0${min}` : min;
            setMinutes(min);
        }, 100);
        console.log(data)
        });
    });


    return (
        <section className="prevSection">
            <h2>{fullDate}</h2>
                <img
                style={{
                width: 200,
                height: 200,
                }}
                src={`http://openweathermap.org/img/wn/${img}@2x.png`}                      
                        />
            <h2>{heures}h{minutes}</h2>
            <p>Il fait actuellement {temp}°C</p>
            <p>{meteoDesc} à {city}.</p>
        </section>
    );

}