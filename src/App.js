import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// importar componentes
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import NarBarExample from './layouts/navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NarBarExample/>}>
            <Route index element={ <Home/>}/>
            <Route path='about' element={ <About/>}/>
            <Route path='contact' element={ <Contact/>}/>

            <Route path='*' element={ <Navigate replace to="/" />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
