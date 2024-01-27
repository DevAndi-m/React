import React, { useState } from 'react'

function ColorChanger() {

    const [text, setText] = useState('') 
    const [isHashed, setHash] = useState(false)
    const [hashValue, setHashValue] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const clickHandler = () => {
        if(isHashed) {
            setHash(false)
            setHashValue('')
        } else {
            setHash(true)
            setHashValue('#')
        }
    }

    const boxColor = {
        backgroundColor: {
            width: "100px",
            height: "100px",
            border: "solid black 2px",
            backgroundColor: `${hashValue}${text}`,
            margin: "auto"
        }
    }

  return (
    <div>
      <div style={boxColor.backgroundColor}></div>
      <label>{hashValue}</label>
      <input type='text' onChange={handleChange}>
      </input>
        <button onClick={clickHandler}>Toggle to add hash</button>
        <h1>The text is "{text}"</h1>
    </div>
  )
}

export default ColorChanger
