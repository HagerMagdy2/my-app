import logo from './logo.svg';
import './App.css';
import MyfirstComponent from './MyfirstComponent';

function App() {
  const Today = new Date().toLocaleDateString();
  return (
    <div className="App">
    <MyfirstComponent name={Today}/>
    </div>
  );
}

export default App;
