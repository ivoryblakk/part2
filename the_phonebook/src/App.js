/*eslint no-trailing-spaces: ["error", { "ignoreComments": true, "skipBlankLines": true }]*/
import React, { useState, useEffect } from 'react'
import {Filter} from './Filter'
import PersonForm from './Form'
import Persons from './Persons'
import contactService from './services/contacts'
import axios from 'axios'
import Message from './Message'

const App = () => {
  const [ persons, setPersons] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setSearchName ] = useState('')
  const [ showAll, setShowAll ] = useState(true)
  const [ message, setMessage ] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
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
    dbPeronsHook()
    event.preventDefault()
    // Start  json server with | npx json-server --port 3001 --watch db.json
    if( isOnTheContactList().length >0 ){
      if(window.confirm(`${newName} is already added to the phonebook,
       replace the old numer with the new one?`)){
        const contact = isOnTheContactList()[0]
        const changedContact = {...contact, number: newNumber }

        contactService
          .update(changedContact.id, changedContact)
          .then(response => {
            console.log("responce ", response)
            setMessage(`Changed the number for ${newName}`)
            setTimeout(() => {
              setMessage(null)
            }, 5000);
          })
          .catch(err => console.log("err =",err))

       }
       dbPeronsHook()
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
        setMessage(`Added ${newName}`)
        setTimeout(() => {
          setMessage(null)
        }, 5000);
      }).catch(err =>{
        setErrorMessage(`Something went wrong adding ${newName} to the phonebook`)
        setTimeout(() => {
          setMessage(null)
        }, 5000);
        console.log(`This is the err ${err}`)
      })
  }

  const deletePersonInPhonebook =(id, name) => {
    if (window.confirm(`Do you really want delete ${name}` )){
      contactService
        .remove(id)
        .then((responce) => {
          setErrorMessage(`${name} has been removed from the phonebook`)
          setTimeout(() => setErrorMessage(null), 5000);
          dbPeronsHook()
         })
        .catch(err =>{
          console.log(err)
          setErrorMessage(`${name} has already been removed from the server`)
        setTimeout(() => {
          setMessage(null)
        }, 5000);
        })
    }
    
  }

  const isOnTheContactList =()=>{
    return persons.filter(p => p.name === newName)
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
        <Message success={message} fail={errorMessage} />
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