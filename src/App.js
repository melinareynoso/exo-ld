import './App.css';
// import { Route, Routes} from 'react-router-dom';
// import ExoContainer from '../../exo-luzdivina/src/Components/ExoContainer/ExoContainer.js';

// import { useEffect} from "react";
// import { useDispatch} from 'react-redux'
// import { getNumbers } from '../src/redux/actions';

import Header from '../src/Components/Header/Header';
import Services from '../src/Components/Servicios/Servicios';
import Especialistas from '../src/Components/Especialistas/Especialistas';
// import Carousel from '../src/Components/Carousel/Carousel';
import FooterModal from '../src/Components/Footer/Footer';
import Tarot from '../src/Components/Servicios/Tarot';

function App() {
  


  return (
    <div className='App' >    
      <Header/>
      <Tarot/>
      <Especialistas/>
      <Services/>
      <FooterModal/>
    </div>

  );
}

export default App;
