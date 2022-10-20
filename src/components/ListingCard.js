import React, {useState} from "react";

function ListingCard({ listing, onDelete }) {

  const [buttonFav, setButtonFav] = useState(false)

  const {id, description, image, location} = listing
  

  function handleFavClick(){
    setButtonFav(buttonFav => !buttonFav)
  }

  function handleDelete(){
    onDelete(listing.id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {buttonFav ? (
          <button onClick={handleFavClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
