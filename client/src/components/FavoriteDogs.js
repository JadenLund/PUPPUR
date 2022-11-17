import React, { useEffect, useState } from "react";
import DogBreeds from "./DogBreeds";
import DogBreedCard from "./DogBreedCard";
import { Card } from "semantic-ui-react";

function FavoriteDogs({client}) {
  const [breeds, setBreeds] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    //fetches all of the dog data from the api
    fetch(`/dog`)
      .then((resp) => resp.json())
      .then((resp) => {
        setBreeds(resp);
      });
  }, []);

  useEffect(() => {
    //fetches all of the favorited dogs
    fetch(`/favorites`)
      .then((resp) => resp.json())
      .then((resp) => {
        setFavorites(resp);
      });
  }, []);

  const dogsToDisplay = breeds
    .filter((dog) => {
      const isIncluded = favorites.some(
        (favorite) => favorite.favoritable_id == dog.id
      );

      return isIncluded;
    })
    .map((dog) => {
      dog.favorite = true;
      return dog;
    });
  return (
    <div>
<Card.Group className="all-cards" itemsPerRow={4}>
      {dogsToDisplay.map((dog) => (
        <Card className="dog-card" key={dog.id}>
          <DogBreedCard dog={dog} client={client}  />
        </Card>
      ))}</Card.Group>
    </div>
  );
}
export default FavoriteDogs;
