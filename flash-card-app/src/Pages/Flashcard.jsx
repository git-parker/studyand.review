import Card from "../Components/Card"
import { useParams } from "react-router-dom"

function Flashcard() {
  const {id} = useParams()

  return(
    <main>
      <Card id={id} sets={sets}/>
    </main>
  )
}

export default Flashcard