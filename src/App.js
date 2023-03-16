import logo from './podo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Галя, поправляйся!
        </p>
        <a
          className="App-link"
          href="https://music.yandex.ru/album/22747037/track/105213792"
          target="_blank"
          rel="noopener noreferrer"
        >
          Подорожник
        </a>
      </header>
    </div>
  );
}

export default App;
