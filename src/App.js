import "aos/dist/aos.css"

import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";

import { Routes ,Route, BrowserRouter,HashRouter} from 'react-router-dom';
import Home from './Home';
import Restrant from './Restrant';
import Contacts from "./Contacts";
import Ordersgin from "./src/Ordersgin";

function App() {
  return (
    <div >
      <HashRouter><Routes>
        
      <Route path="/" element={<Home />} >


      <Route path="Contacts" element={<Contacts />} />








      </Route>






      <Route path="Ordersgin" element={<Ordersgin />} />



      <Route path="/Restrant" element={< Restrant />} />





      </Routes></HashRouter>
      
    </div>
  );
}

export default App;
