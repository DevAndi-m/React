import React, { useEffect, useState } from 'react'
import axios from 'axios'

function RandomUserGenerator() {
  
    const [persons, setPersons] = useState([])
    const [personNum, setPersonNum] = useState()

    useEffect(() => {
        axios.get('https://random-data-api.com/api/v2/users?size=10&response_type=json')
        .then(res => setPersons(res.data))
        .catch(err => console.log(err))
    }, [])

    if (persons.length === 0) {
        return <div>Loading...</div>;
    }

    const currentPerson = persons[personNum % persons.length];

    if (!currentPerson) {
        return <div>Error: Unable to fetch user data</div>;
    }
  
    return (
    <div>
        <img src=''></img>
      <h3>Name: {currentPerson.first_name}</h3>
      <h3>Last Name:</h3>
      <h3>Phone Number: </h3>
      <h3>Email: </h3>

      <button>Next Person</button>
    </div>
  )
}

export default RandomUserGenerator
