import React from 'react'
const shortid = require('shortid');

const Persons = (props) =>{
    const {showAll,copy, searchName, deletePersonInPhonebook} = props
    let rows =""
    //let searchArr = copy.filter( c => c.name.indexOf(searchName) > -1 />
    if(showAll){
      rows = copy.map( c => <Contact key={shortid.generate()} name={c.name} number={c.number} deletePersonInPhonebook={deletePersonInPhonebook} id={c.id}/>)
    } else {
      const searchArr = copy.filter( c => c.name.indexOf(searchName) > -1 )
      rows = searchArr.map( c => <Contact key={shortid.generate()} name={c.name} number={c.number} deletePersonInPhonebook={deletePersonInPhonebook} id={c.id}/>)
    }
    return (
      <div>
        {rows}
      </div>
    )
  }

  const Contact = props => {
    const {name , number, deletePersonInPhonebook, id} = props
    return <div> {name} {number} <DeletePerson deletePersonInPhonebook={deletePersonInPhonebook} id={id} name={name} /></div>;
  }

  const DeletePerson = ({deletePersonInPhonebook,id, name}) => {
    return (  
        <button onClick= {()=>{deletePersonInPhonebook(id, name)}}> delete </button>
    )
  }

  export default Persons