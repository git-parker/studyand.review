import { useState, useContext } from "react"
import { SetsContext } from "../App";
import { Link } from "react-router-dom"

function SetsGrid() {

  const sets = useContext(SetsContext).sets;

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