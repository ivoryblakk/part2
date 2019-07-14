import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "333-333-3333" }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  let copy = [...persons];

  const addPersonToPhonebook = (event) => {
    event.preventDefault()

    if( isOnTheContactList().length >0 ){
      alert(`${newName} is already in the Phonebook`)
      return;
    }
    copy.push({name: newName, number: newNumber})
    setPersons(copy)
    setNewName("")
    setNewNumber("")
    console.log('copy', copy)
    console.log('person', persons)
    console.log('button clicked', event.target)
    
  }

  const isOnTheContactList =()=>{
    return copy.filter(c => c.name === newName)
  }

  const List =()=> {
    const rows = copy.map( c => <Contact key={c.name} name={c.name} number={c.number} />)
    return (
      <div>
        {rows}
      </div>
    )
  }

  const Contact = props => {
    const {name , number} = props
    return <div> {name} {number}</div>;
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = event => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPersonToPhonebook}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{List()}</div>
    </div>
  )
}

export default App