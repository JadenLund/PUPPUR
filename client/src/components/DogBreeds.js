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
}) {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    //fetches all of the dog data from the api
    fetch(`/dog`)
      .then((res) => res.json())
      .then((res) => {
        setBreeds(res);
      });
  }, []);

  const filters = Object.keys(checkboxes); //gives back an array of

  const dogsToDisplay = breeds.filter((dog) => {
    //hi
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
    <div>
      <Logout />
      <div className="dog-breeds">
        {/* //returns each dog card to display on the page*/}
        <Card.Group itemsPerRow={3}>
          {dogsToDisplay.map((dog) => (
            <DogBreedCard id={dog.id} />
          ))}
        </Card.Group>
      </div>
    </div>
  );
}
export default DogBreeds;
