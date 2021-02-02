import logo from './images/logo.svg';
import AllQuizz from './routes/Routeur';
import './sass/helpers/global.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <>
        <AllQuizz/>
        </>
      </header>
    </div>
  );
}

export default App;
