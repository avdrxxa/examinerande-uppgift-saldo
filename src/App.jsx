import './App.css'
import {Routes, Route} from 'react-router-dom'
import Transaktioner from './pages/Transaktioner'
import Homepage from './pages/Homepage'
import Utgifter from './pages/Utgifter'
import Footer from './komponenter/Footer'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/transaktioner' element={<Transaktioner/>}/>
      <Route path='/utgifter' element={<Utgifter/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
