import SetsGrid from "../Components/SetsGrid"
import { Link } from "react-router-dom"

function Sets({sets}) {


  return(
    <main>
      <h1>Study & Review Pre-Alpha</h1>
      <SetsGrid/>
      <Link to="/createset"><button>+</button></Link>
    </main>
  )
}

export default Sets