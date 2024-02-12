import {useState} from 'react';
import './Formularz.css';

function Formularz() {
    const [imie, setImie]=useState("Jan");
    const [nazwisko, setNazwisko]=useState("Bąk");
    return(
        <div>
            <input onChange={(e) => setImie(e.target.value)} type="text" id="imie"/>
            <input onChange={(e) => setNazwisko(e.target.value)} type="text" id="nazwisko"/>
            <p>Nazywam się {nazwisko}, {imie} {nazwisko}</p>
        </div>

    );
}

export default Formularz;