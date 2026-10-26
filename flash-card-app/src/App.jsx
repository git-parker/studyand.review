import { HashRouter as Router, Routes, Route } from 'react-router-dom'

//pages
import Sets from './Pages/Sets'
import Flashcard from './Pages/Flashcard'
import { useState, createContext } from 'react'
import templateSets from './setsData'

export const SetsContext = createContext()

function App() {

  const [sets, setSets] = useState(JSON.parse(localStorage.getItem('sets')) || templateSets)

  return (
    <SetsContext.Provider value={{sets, setSets}}>
      <Router>
        <Routes>
          <Route path="/" element={<Sets/>}/>
          <Route path="/sets" element={<Sets/>}/>
          <Route path="/card/:id" element={<Flashcard/>}/>
        </Routes>
      </Router>
    </SetsContext.Provider>
  )
}

export default App
