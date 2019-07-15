import React, { useState } from 'react'
import {Filter} from './Filter'
import PersonForm from './Form'
import Persons from './Persons'


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

 
  

 

  const addPersonToPhonebook = (event) => {
    event.preventDefault()

    if( isOnTheContactList().length >0 ){
      alert(`${newName} is already in the Phonebook`)
      return;
    }
    setShowAll(true)
    copy.push({name: newName, number: newNumber})
    setPersons(copy)
    setNewName("")
    setNewNumber("")
    setSearchName("")
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
  
        <Persons showAll={showAll} copy={copy} searchName={searchName} />
      </div>
  
  )
}

export default App