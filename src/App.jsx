import "./App.css"
import { useState } from "react"

export default function App() {
  const [text, setText] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    // console.log(typeof text);
    // console.log(text);
    setText("")
    let textArr = text.split(" ")
    // console.log(typeof textArr);
    // console.log(textArr);
    let wordToFind = "to"
    const recievedArr = textArr.filter((word) => word === wordToFind)
    console.log(recievedArr)
    console.log(
      `${wordToFind} is ${recievedArr.length} times present in your text`
    )
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
        ></textarea>
        <br />
        <button type="submit"> Add Para </button>
      </form>
    </div>
  )
}
