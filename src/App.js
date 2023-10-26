import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Emotions from './components/Emotions/Emotions';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Emotions />
      <About />
    </div>
  );
}

export default App;
