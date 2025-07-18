// src/App.js
import './App.css';
import Menu from './Components/menu'; // Import the component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The AI Barista</h1>
      </header>
      <main>
        <Menu /> {/* Use the component like an HTML tag */}
      </main>
    </div>
  );
}

export default App;