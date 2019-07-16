import React, {useState, useEffect}from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar'
//import Languages from './Components/Languages'
//import GeneralFacts from './Components/GeneralFacts'
import ShortList from './Components/ShortList'
const baseURL ='https://restcountries.eu/rest/v2/all'

function App() {
  const [countries,setCountries] = useState('');
  const [selectedCountry, setSelectedCountry] =useState('');

  useEffect(()=>{
    console.log('effect')
    axios
    .get(baseURL)
      .then(response=> {
        console.log('success')
        setCountries(response.data)
      })
  }, [])

  const handleSearch =event =>{
    setSelectedCountry(event.target.value)
  }

  return (
    <div className="App">
        
        <SearchBar handleSearch={handleSearch} value={selectedCountry}/>

        <ShortList selectedCountry={selectedCountry} countries={countries} setSelectedCountry={setSelectedCountry}/>

         
    </div>
  );
}

export default App;
