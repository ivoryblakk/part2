import React from 'react';
import GeneralFacts from './GeneralFacts'
import Languages from './Languages'
import Weather from './Weather'
const ShortList = props =>{
    const {selectedCountry, setSelectedCountry, countries } = props

    const rows =()=> {
        const rows = selectedCountry !== ""? countries.filter(c =>  c.name.indexOf(selectedCountry) > -1) : ""
        return rows
    }

    const CountryOfChoice = props => {
      const {name } = props
      return (
         <div>
           {name}
          <Button name={name}/> 
         </div> 

      )
    }

    const Button = props => {
      return  <button onClick={() => setSelectedCountry(props.name)}> show </button>
    }
  
    return (
      <div>
        {rows() === "" ? "": rows().length >10 ?"Please put in more details" :rows().length === 1?  "" : rows().map(c => <CountryOfChoice key={c.name}  name={c.name}  />)}
        
        {rows().length === 1?
        <div> 
        <h1>{rows()[0].name}</h1>
        <GeneralFacts population={rows()[0].population} capital={rows()[0].capital} />
        <Languages languages={rows()[0].languages} />
        <img  width="200px"alt="flag" src={rows()[0].flag} />
        <Weather name={rows()[0].name} />
        </div>: "" }
      </div>
    )
  }

  export default ShortList    