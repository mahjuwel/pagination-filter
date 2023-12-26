import React, { useEffect, useState } from 'react'

 const Search = (props) => {
  const [searchText, setSearchText]= useState("");
  
    useEffect(() => {
      props.onSearch(searchText);
    }, [searchText,props])
  
    const handleChange = (e) => {
      setSearchText(e.target.value);
    };
  return (
    <div style={{float:'right'}}>
      <input
        type="text"
        name="searchText"
        placeholder="Search by any value"
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
};
export default Search