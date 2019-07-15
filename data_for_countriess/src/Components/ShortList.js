import React from 'react';
import GeneralFacts from './GeneralFacts'
import Languages from './Languages'
const ShortList = props =>{
    const {selectedCountry, countries } = props

    const rows =()=> {
        const rows = selectedCountry !== ""? countries.filter((c,i) =>  c.name.indexOf(selectedCountry) > -1) : ""
       // countries.filter(c =>  c.name.indexOf(selectedCountry) > -1)
        return rows
    }
    //rows().length >10 ?"Please put in more details" : rows().map(c => <div>  {c.name}  </div>)
    return (
      <div>
        {rows() === "" ? "": rows().length >10 ?"Please put in more details" :rows().length === 1?  "" : rows().map(c => <div key={c.name}>  {c.name}  </div>)}
        
        {rows().length === 1?
        <div> 
        <h1>{rows()[0].name}</h1>
        <GeneralFacts population={rows()[0].population} capital={rows()[0].capital} />
        <Languages languages={rows()[0].languages} />
        <img  width="200px"alt="flag" src={rows()[0].flag} />
        </div>: "" }
      </div>
    )
  }

  export default ShortList    