import Home from './Pages/Home';
import Record from './Pages/Record';
import Navbars from "./Components/Navbar";
import{BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Navbars/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/record" element={<Record/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
