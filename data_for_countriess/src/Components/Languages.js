import React from 'react';

const Languages = props =>{
    const {languages} = props
    const rows = () => { 
      return languages.map(c => <li key={c.name}> {c.name} </li> )   
    }
    return( 
      <div>
         <h2>Languages</h2> 
        <ul> 
        {rows()}
        </ul>
      </div>
    )
  }

  export default Languages  