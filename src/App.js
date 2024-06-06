import logo from './logo.svg';
import './App.css';
import { Route, Routes, Outlet } from "react-router";
import { BrowserRouter } from 'react-router-dom';
import Ulubari from './pages/Ulubari';
import Panbazar from './pages/Panbazar';
import Jail from './pages/Jail';
import Ng from './pages/Ng';
import Medical from './pages/Medical';
import Jalukbari from './pages/Jalukbari';
import Dharapur from './pages/Dharapur';
import Six_mile from './pages/Six_mile';

function App() {
  return (
    
      
      <BrowserRouter>
    <Ng />
      <Routes>


      <Route>
      <Route path='/Ulubari'  element={<Ulubari/>}></Route>
      <Route path='/Panbazar'  element={<Panbazar/>}></Route>
      <Route path='/Medical'  element={<Medical/>}></Route>
      <Route path='/Jail'  element={<Jail/>}></Route>
      <Route path='/Jalukbari'  element={<Jalukbari/>}></Route>
      <Route path='/sixmile'  element={<Six_mile/>}></Route>
      <Route path='/Dharapur'  element={<Dharapur/>}></Route>
      </Route>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
