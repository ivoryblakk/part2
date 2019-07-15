
  import React from 'react'

  const PersonForm = (props) =>{
    const {addPersonToPhonebook,newName, handleNameChange, newNumber, handleNumberChange} =props
    return (     
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
     )
 }

 export default PersonForm