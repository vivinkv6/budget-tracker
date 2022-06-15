import Home from './Pages/Home';
import Record from './Pages/Record';
import Navbars from "./Components/Navbar";
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import NotFound from './Pages/NotFound';


function App() {
  return (
    <BrowserRouter>
    <Navbars/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/record" element={<Record/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
