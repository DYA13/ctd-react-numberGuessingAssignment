import React, { Component } from "react"
import Button from "./Button"

const GuessControl = ({ onGuess }) => {
  const [currentGuess, setCurrentGuess] = useState("")

  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value)
  }

  const onSubmitGuess = () => {
    // convert the input value to a number before passing it to the onGuess prop.
    onGuess(Number(currentGuess))

    // clear the currentGuess after submitting.
    setCurrentGuess("")
  }

  return (
    <div>
      <input type='number' value={currentGuess} onChange={handleInputChange} />

      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  )
}

export default GuessControl
