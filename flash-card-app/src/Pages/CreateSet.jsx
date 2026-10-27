import { useState, useContext } from "react"
import { SetsContext } from "../App"
import Sets from "./Sets";
import { useNavigate } from "react-router-dom";

function CreateSet() {

  const navigate = useNavigate();

  const sets = useContext(SetsContext).sets;
  const setSets = useContext(SetsContext).setSets;

  const [inputTitle, setInputTitle] = useState("")
  const [inputDesc, setInputDesc] = useState("")
  const [newCards, setNewCards] = useState([
    {front:"", back: ""},
    {front:"", back: ""},
    {front:"", back: ""},
    {front:"", back: ""},
  ])


  function addNewCard() {
    setNewCards([...newCards, {front:"", back: ""}])
  }

  function removeNewCard(newCardIndex) {
    setNewCards(newCards.filter((_, index) => 
      newCardIndex !== index
    ))

  }

  function handleCardChange(e, newCardIndex, side) {
    setNewCards(newCards.map((newCard, index) => 
      index === newCardIndex ? 
      {...newCard, [side]:e.target.value}: //[] allow the key to use variable liek front or back
      newCard
    ))
  }

  function createSet() {
    const set = {
      id: (Math.round(Math.random()*1000)).toString(),
      title:inputTitle,
      desc:inputDesc,
      setCards: newCards
    }

    setSets([...sets, set])
    localStorage.setItem('sets', JSON.stringify(sets))
    navigate("/sets")
    
  }


  const renderedNewCards = newCards.map((newCard, index) => {
    return(
      <div className="new-card">
        <h1>{index+1}</h1>
        <input placeholder="Front" onChange={(e) => handleCardChange(e, index, "front")}/>
        <input placeholder="Back" onChange={(e) => handleCardChange(e, index, "back")}/>
        <button onClick={() => removeNewCard(index)}>X</button>
      </div>  
    )  
  }) 

  console.log("Is sets an array?", Array.isArray(sets));
  console.log("Saved data:", JSON.parse(localStorage.getItem("sets")));
  console.log("Sets:", sets);


return(
  <main>
    <h1>Create New Set</h1>
    <input placeholder="Title" value={inputTitle} onChange={(e) => setInputTitle(e.target.value)}/>
    <input placeholder="Description" value={inputDesc} onChange={(e) => setInputDesc(e.target.value)}/>
    <div id="new-cards-list">
      {renderedNewCards}
    </div>
    <button onClick={addNewCard}>+</button>
    <button onClick={createSet}>Create</button>

  </main>
)
}

export default CreateSet