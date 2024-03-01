import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavigationBar from './components/NavBar/NavBar.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import SchedulingPage from './components/SchedulingPage/SchedulingPage.jsx'
import './App.css'

function App() {

  return (
  <Router>
    <div>
      <NavigationBar />
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/book-appointment" element={<SchedulingPage/>} />
        </Routes>
    </div>
  </Router>
  )
}

export default App
