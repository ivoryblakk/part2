import React from 'react';
const SearchBar = props =>{
    const { handleSearch,selectedCountry } = props
    return (
      <div>
       Find Countries: <input value={selectedCountry} onChange={handleSearch} />
      </div>

    )
  }

  export default SearchBar