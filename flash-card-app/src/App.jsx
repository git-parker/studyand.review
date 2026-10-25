import { HashRouter as Router, Routes, Route } from 'react-router-dom'

//pages
import Sets from './Pages/Sets'
import Flashcard from './Pages/Flashcard'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sets/>}/>
        <Route path="/sets" element={<Sets/>}/>
        <Route path="/card/:id" element={<Flashcard/>}/>
      </Routes>
    </Router>
  )
}

export default App
