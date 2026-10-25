import { useState } from "react";

function Card() {
  const [cards, setCards] = useState([{front:"estudiar", back:"study", flipped:false},
                                      {front:"frijoles", back:"bean", flipped:false},
                                      {front:"caminar", back:"walk", flipped:false},
                                      {front:"cabeza inclinada", back:"tilted head", flipped:false}
                                    ])
  const [frontInput, setFrontInput] = useState("Front Side")
  const [backInput, setBackInput] = useState("Back Side")
  const [currentIndex, setCurrentIndex] = useState(0)

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
      <div>
        <label>Front:</label>
        <input value={frontInput} onChange={(e) => setFrontInput(e.target.value)}/>
        <label>Back:</label>
        <input value={backInput} onChange={(e) => setBackInput(e.target.value)}/>
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