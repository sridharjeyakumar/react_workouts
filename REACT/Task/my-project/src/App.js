
import './App.css';
import LogIn from './project/LogIn';
import Navbar from './project/Navbar';
import SignIn from './project/SignIn';
import{Routes,Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <>
        
      <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<LogIn/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
