import React, { useState, useEffect } from "react";
import DogBreedCard from "./DogBreedCard";
import { Card } from "semantic-ui-react";
import Logout from "./Logout";

function DogBreeds({
  searchTerm,
  checkboxes,
  sizeLabels,
  akcGroupLabels,
  coatLengthLabels,
  client,
  comment,
}) {
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


  function handleFavorites(dog_id) {
    const favoritesCopy = [...favorites];
    fetch(`/favorite/${dog_id}`, {
      method: "POST",
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        favoritesCopy.push(data);
        setFavorites(favoritesCopy);
      });
  }

  function handleUnfavorites(dog_id) {
    fetch(`/unfavorite/${dog_id}`, {
      method: "DELETE",
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setFavorites(data);
      });
  }

  const filters = Object.keys(checkboxes); //gives back an array of

  const dogsToDisplay = breeds
    .map((dog) => {
      const isIncluded = favorites.some(
        (favorite) => favorite.favoritable_id == dog.id
      );

      if (isIncluded) {
        dog.favorite = true;
      } else {
        dog.favorite = false;
      }

      return dog;
    })
    .filter((dog) => {
      const breedMatchesTerm = dog.breed
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const sizeFilters = sizeLabels.filter(
        (label) => checkboxes[label] === true
      );
      const filterBySize = () =>
        sizeFilters.length > 0 ? sizeFilters.includes(dog.size) : true;

      const coatFilters = coatLengthLabels.filter(
        (label) => checkboxes[label] === true
      );
      const filterByCoat = () =>
        coatFilters.length > 0 ? coatFilters.includes(dog.coat_length) : true;

      const groupFilters = akcGroupLabels.filter(
        (label) => checkboxes[label] === true
      );
      const filterByGroup = () =>
        groupFilters.length > 0 ? groupFilters.includes(dog.group) : true;

      return (
        breedMatchesTerm && filterBySize() && filterByCoat() && filterByGroup()
      );
    });

  return (
    <>
      {/* //returns each dog card to display on the page*/}
      <Card.Group className="all-cards" itemsPerRow={4}>
        {dogsToDisplay.map((dog) => (
          <Card className="dog-card" key={dog.id}>
            <DogBreedCard
              handleFavorites={handleFavorites}
              handleUnfavorites={handleUnfavorites}
              comment={comment}
              dog={dog}
              client={client}
            />
          </Card>
        ))}
      </Card.Group>
    </>
  );
}
export default DogBreeds;
