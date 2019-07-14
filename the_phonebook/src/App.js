import React, { useState } from 'react'

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
    console.log('copy', copy)
    console.log('person', persons)
    console.log('button clicked', event.target)
    
  }

  const isOnTheContactList =()=>{
    return copy.filter(c => c.name === newName)
  }

  const List =()=> {
    let rows =""
    //let searchArr = copy.filter( c => c.name.indexOf(searchName) > -1 />
    if(showAll){
      rows = copy.map( c => <Contact key={c.name} name={c.name} number={c.number} />)
    } else {
      const searchArr = copy.filter( c => c.name.indexOf(searchName) > -1 )
      rows = searchArr.map( c => <Contact key={c.name} name={c.name} number={c.number} />)
    }
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
      <div>
       Search For Contact: <input value={searchName}  onChange={handleNameSearch}/>
      </div> 
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