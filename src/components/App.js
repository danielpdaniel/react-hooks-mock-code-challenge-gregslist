import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState(false);
  const [allListings, setAllListings] = useState(false);
  const [searchTerm, setSearchTerm] = useState(false);

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(resp=>resp.json())
    .then(data=>{setListings(data); setAllListings(data)})
  }, [])

  function handleDelete(cardId){
    const newListings = listings.filter(listing=> listing.id !== cardId)
    setListings(newListings)

    fetch(`http://localhost:6001/listings/${cardId}`,{
      method:"DELETE"
    })
    .then(resp=>resp.json())
    .then(data=>console.log(data))
  }

  function handleSearchChange(searchValue){
    setSearchTerm(searchValue)
  }

  function handleSubmit(){
    const newListings = allListings.filter(listing=>listing.description.toUpperCase().includes(searchTerm.toUpperCase()))
    setListings(newListings)
  }

  
  return (
    <div className="app">
      <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} onSubmit={handleSubmit}/>
      { listings ?
      <ListingsContainer listings={listings} onDelete={handleDelete}/> :
      <p>Loading...</p>
      }
    </div>
  );
}

export default App;
