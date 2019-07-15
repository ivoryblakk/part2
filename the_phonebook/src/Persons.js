import React from 'react'
const shortid = require('shortid');

const Persons = (props) =>{
    const {showAll,copy, searchName} = props
    let rows =""
    //let searchArr = copy.filter( c => c.name.indexOf(searchName) > -1 />
    if(showAll){
      rows = copy.map( c => <Contact key={shortid.generate()} name={c.name} number={c.number} />)
    } else {
      const searchArr = copy.filter( c => c.name.indexOf(searchName) > -1 )
      rows = searchArr.map( c => <Contact key={shortid.generate()} name={c.name} number={c.number} />)
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

  export default Persons