
import './App.css';
import Navbar from './components/statics/Navbar';
import Ocean from './components/Ocean';
import Presentation from './components/Presentation';
import Productos from './components/Productos';
import Contact from './components/Contact';
import Footer from './components/statics/Footer';

function App() {
  return (
    <div className="App">
      <body>
      <header className="App-header">
        <Navbar/>
      </header>
     
        
      <div className='row ocean'>
         <Ocean/>
        </div>
        <div className='container presentacion'>
         <Presentation/>
        </div>
        
        <div className='row'>
         <Productos/>
        </div>
      
      <div className='container contact-form'>
         <Contact/>
         
        </div>
        

        <footer>
        <Footer/>
      </footer>
      
      </body>
  

    </div>
  );
}

export default App;
