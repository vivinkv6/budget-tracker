import Home from './Pages/Home';
import Navbars from "./Components/Navbar";
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import NotFound from './Pages/NotFound';




function App() {
  
 


  return (
    <BrowserRouter>
    <Navbars/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
