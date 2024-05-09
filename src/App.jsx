import { About, Home, Login, Success, } from "./components"
import { BrowserRouter as Router,Routes, Route,} from 'react-router-dom';
const App = () => {
  return (<div className='scroll-smooth mx-auto  w-full overflow-hidden min-h-screen'>
  <Router>
  <div>
   <Routes>
    <Route path="/" exact element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/success" element={<Success/>} />
    <Route path='*' element={<Home/>}/>
  </Routes>
</div>
   </Router>
   </div>
  )
}

export default App