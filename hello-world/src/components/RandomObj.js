import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'

const initValue = 1;
const reduce = (state, action) => {
    switch(action) {
        case 'next': return state + 1;
        case 'previous': return state - 1;
        default: return state
    }
}

function RandomObj() {

    const [data, setData] = useState({})
    const [pgNum, dispatch] = useReducer(reduce, initValue)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${pgNum}`)
        .then(res => setData(res.data)
        , console.log('got response'))
        .catch(err => console.log(err))
    }, [pgNum])

  return (
    <div>
        <h3>Title: {data.title}</h3>
        <h3>Body: {data.body}</h3>

        <button onClick={() => dispatch('next')}>next page</button>
        <button onClick={() => dispatch('previous')}>prev page</button>
        <div>page: {pgNum}</div>
    </div>
  )
}

export default RandomObj
