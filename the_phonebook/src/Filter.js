import React from 'react'

export const Filter = (props) =>{
    
    return( 
       <div>
        Search For Contact: <input value={props.searchName}  onChange={props.handleNameSearch}/>
      </div> 
      )
  }
