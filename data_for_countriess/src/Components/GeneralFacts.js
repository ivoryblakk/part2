import React from 'react';

const GeneralFacts = props => {
   const {capital, population } = props
    return (
      <div>
        <span>Capitol: {capital} </span>
        <br/>
        <span>Population: {population}  </span>
      </div>

    )
  }

  // const Flag = props =>{

  // }

  export default GeneralFacts    