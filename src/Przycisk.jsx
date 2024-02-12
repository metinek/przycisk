import './Przycisk.css';
import { useState } from 'react';

function Przycisk() {
    const [licznik, setLicznik] = useState(0);




    return (
        <div>
            <button onClick={() => setLicznik(licznik+1)}>Klik</button>
            <p>Kliknięto {licznik} razy</p>
        </div>
    );



}

export default Przycisk;