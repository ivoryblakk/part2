import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  let copy = [...persons];

  const addPersonToPhonebook = (event) => {
    event.preventDefault()

    if( isOnTheContactList().length >0 ){
      alert(`${newName} is already in the Phonebook`)
      return;
    }
    copy.push({name: newName})
    setPersons(copy)
    setNewName("")
    console.log('copy', copy)
    console.log('person', persons)
    console.log('button clicked', event.target)
    
  }

  const isOnTheContactList =()=>{
    return copy.filter(c => c.name === newName)
  }

  const List =()=> {
    const rows = copy.map( c => <Contact key={c.name} name={c.name} />)
    return (
      <div>
        {rows}
      </div>
    )
  }

  const Contact = props => {
    const {name} = props
    return <div> {name}</div>;
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPersonToPhonebook}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
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