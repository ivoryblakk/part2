/*eslint no-trailing-spaces: ["error", { "ignoreComments": true, "skipBlankLines": true }]*/
import React, { useState, useEffect } from 'react'
import {Filter} from './Filter'
import PersonForm from './Form'
import Persons from './Persons'
import contactService from './services/contacts'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setSearchName ] = useState('')
  const [ showAll, setShowAll ] = useState(true)
  let copy = [...persons]

  const dbPeronsHook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        copy = [...persons]
      })
  }

  useEffect(dbPeronsHook, [])


 // console.log("Perons Arr", persons)

  const addPersonToPhonebook = (event) => {
    event.preventDefault()
    // Start  json server with | npx json-server --port 3001 --watch db.json
    if( isOnTheContactList().length >0 ){
      alert(`${newName} is already in the Phonebook`)
      return;
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    contactService
      .create(personObject)
      .then(data => {
        setPersons(persons.concat(data))
        setShowAll(true)
        dbPeronsHook()
      }).catch(err =>{
        console.log(`This is the err ${err}`)
      })
  }

  const deletePersonInPhonebook =(id, name) => {
    if (window.confirm(`Do you really want delete ${name}` )){
      contactService
        .remove(id)
        .catch(err =>{
          console.log(err)
        })

    }
    dbPeronsHook()
  }

  const isOnTheContactList =()=>{
    return copy.filter(c => c.name === newName)
  }


/******************************************
*
*             Handelers
*
 ******************************************/
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = event => {
    setNewNumber(event.target.value)
  }
  const handleNameSearch = event =>{
    setSearchName(event.target.value)
    if(event.target.value !== ""){
      setShowAll(false)
    }
  }

 /******************************************
 *            Main Return
 ******************************************/

  return (
    
      <div>
        <h2>Phonebook</h2>
  
        <Filter searchName={searchName} handleNameSearch={handleNameSearch}  />
  
        <h3>Add a new</h3>
  
        <PersonForm
        addPersonToPhonebook ={addPersonToPhonebook}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        />
  
        <h3>Numbers</h3>
  
        <Persons showAll={showAll} copy={copy} searchName={searchName}  deletePersonInPhonebook={deletePersonInPhonebook} />
      </div>
  
  )
}

export default App