import './App.css';
import Device from './Components/Device/Device';
import Watch from './Components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Device name="Uphone" price="15000"></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
