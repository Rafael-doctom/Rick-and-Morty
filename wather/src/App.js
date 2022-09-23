
import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Persons } from './components/Persons';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Persons/>
      <Footer/>
    </div>
  );
}

export default App;
