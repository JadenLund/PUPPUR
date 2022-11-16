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

  useEffect(() => {
    //fetches all of the dog data from the api
    fetch(`/dog`)
      .then((resp) => resp.json())
      .then((resp) => {
        setBreeds(resp);
      });
  }, []);

  const filters = Object.keys(checkboxes); //gives back an array of

  const dogsToDisplay = breeds.filter((dog) => {
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
            <DogBreedCard comment={comment} dog={dog} client={client} />
          </Card>
        ))}
      </Card.Group>
    </>
  );
}
export default DogBreeds;
