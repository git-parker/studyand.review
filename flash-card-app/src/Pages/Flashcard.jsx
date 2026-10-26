import Card from "../Components/Card"
import { useParams, Link } from "react-router-dom"

function Flashcard() {
  const {id} = useParams()

  return(
    <main>
      <Link to="/"><button id="backButton">Back</button></Link>
      <Card id={id}/>
    </main>
  )
}

export default Flashcard