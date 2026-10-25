import { useState } from "react"
import { Link } from "react-router-dom"
import sets from "../setsData"

function SetsGrid() {


  const renderedSets = sets.map((set, index) => {
    return(
      <Link to={`/card/${set.id}`}>
        <div className="set">
        <h1>{set.title}</h1>
        <p>{set.desc}</p>
        </div>
      </Link>
    )
  })

  return(
    <div id="setsGrid">
      {renderedSets}
    </div>
  )
}

export default SetsGrid