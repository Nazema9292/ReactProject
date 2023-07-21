import logo from './logo.svg';
import './App.css';
import First from './components/First';
import Second from './components/Second';
import EventBinding from './components/EventBinding'
import Parent from './components/Parent';


function App() {
  return (
    <div className="App">
      React App   
    <First name="Class" title = "Component"/>   
    { /*<Second />
      <EventBinding /> */ }
      <Parent />
    </div>
  );
}

export default App;