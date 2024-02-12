import './App.css';
import Przycisk from './Przycisk.jsx';
import Formularz from './Formularz.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Przycisk</h1>
      </header>
      <Przycisk/>
      <h1>Formularz</h1>
      <Formularz/>
    </div>
  );
}

export default App;
