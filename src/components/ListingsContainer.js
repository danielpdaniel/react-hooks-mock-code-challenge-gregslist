import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDelete }) {

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */
        listings.map(listing => <ListingCard key={listing.id} listing={listing} onDelete={onDelete}/>)
        }
      </ul>
    </main>
  );
}

export default ListingsContainer;
