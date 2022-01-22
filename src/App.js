import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Game1 from './Pages/Game1';
import Game2 from './Pages/Game2';
function App() {
  return <Router>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route path='/game1' element={<Game1/>}/>
          <Route path='/game2' element ={<Game2/>}/>
        </Routes>
      </Router>

}

export default App;
