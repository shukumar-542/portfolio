import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import NavBar from './Components/NavBar/NavBar';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import Works from './Components/Works/Works';

function App() {
  return (
    <div className='App'> 
     <NavBar/>
     <Intro/>
     <Services/>
     <Works/>
     <Portfolio/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
