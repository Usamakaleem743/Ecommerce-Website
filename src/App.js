import './App.css';
import Main from './Components/Main/Main';
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom'
import FilteredProducts from './Components/Filtereddproducts/Filtereddproducts'
import Navbar from './Components/Navbar/Navbar'
import Singleproduct from './Components/Filtereddproducts/Singleproduct';
import Footer from './Components/Footer/Footer';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
function App() {
  
  return (
    <div className="App">
      <div className='content'>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/products/:type' element={<FilteredProducts/>}/>
          <Route path='/products/:type/:id' element={<Singleproduct/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
    </div>
  );
}

export default App;
