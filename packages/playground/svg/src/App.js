import './App.css';
import SvgInComponent from './components/SvgInComponent';
import svg from './google.svg';

function App() {
  return (
    <div className="App">
      <SvgInComponent />
      <img src="google.svg" alt="google" />
      <img src={svg} alt="google" />
    </div>
  );
}

export default App;
