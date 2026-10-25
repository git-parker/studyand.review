import { useState, useContext, useEffect } from "react"
import { SetsContext } from "../App";

function Card({id}) {

  const sets = useContext(SetsContext).sets;
  const setSets = useContext(SetsContext).setSets;

  const [varSets, setVarSets] = useState(sets)
  const [cards, setCards] = useState(sets.find((set) => set.id === id).setCards)
  const [frontInput, setFrontInput] = useState("")
  const [backInput, setBackInput] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setSets(s => s.map(set => {
        if(set.id === id) {
          return {...set, setCards: cards}
        } else {
          return set
        }
    }))
  }, [cards])

  function addNewCard() {
    //creating new card from input values
    const newCard = {front:frontInput, back:backInput, flipped:false}

    //adding new card to this list
    setCards(c => [...c, newCard])

    //resetting inputs
    setFrontInput("");
    setBackInput("");
  }

  function goToNextCard() {
    if(currentIndex >= cards.length-1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(i => i+1)
    }
    
  }

  function goToPrevCard() {
    if(currentIndex <= 0) {
      setCurrentIndex(cards.length-1)
    } else {
      setCurrentIndex(i => i-1)
    }
    
  }

  function flipCard() {
    setCards(cards.map((card, index) => {
      if(index===currentIndex) {
        return {...card, flipped:!card.flipped}
      } else {
        return card
      }
    }))
  }

  return(
    <div>
      <div id="inputs">
        <input placeholder="Front Text" value={frontInput} onChange={(e) => setFrontInput(e.target.value)}/>
        <input placeholder="Back Text" value={backInput} onChange={(e) => setBackInput(e.target.value)}/>
        <button onClick={addNewCard}>Add</button>
      </div>
      <div id="card-container">
        <button onClick={goToPrevCard}>&lt;</button>
        <div id="card" onClick={flipCard}>
          <p>
            {cards[currentIndex].flipped ? 
             cards[currentIndex].back : cards[currentIndex].front}
          </p>
        </div>
        <button onClick={goToNextCard}>&gt;</button>
      </div>
    </div>
  )
  
}

export default Card