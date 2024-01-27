import React, { useReducer } from 'react'

    const person = {
        name: 'Andi',
        lastName: 'Morina',
        age: 21
    }

    const reducer = (state, action) => {
        switch (action) {
            case 'increment':
                return state + 1
            default:
                return state;
        }
    }

function ReducerHook() {
    const [state, dispatch] = useReducer(reducer, person.age)
  return (
    <div>
      <h1>{person.name}</h1>
      <h1>{person.lastName}</h1>
      <h1>{state}</h1>
      <button onClick={() => dispatch('increment')}>increment Age</button>
    </div>
  )
}

export default ReducerHook
