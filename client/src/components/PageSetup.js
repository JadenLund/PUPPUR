
import React, { useState } from "react";
import DogBreeds from "./DogBreeds";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import dogFilterHelpers from "./utilities/dogFilterHelpers";

function PageSetup({client}) {
  console.log("client", client)
  const { allLabelsObject, sizeLabels, akcGroupLabels, coatLengthLabels } =
    dogFilterHelpers();
  const [searchTerm, setSearchTerm] = useState("");
  const [checkbox, setCheckbox] = useState(allLabelsObject);

  function handleToggle(label) {
    const newCheckboxes = { ...checkbox };
    newCheckboxes[label] = !checkbox[label];
    setCheckbox(newCheckboxes);
    //on toggle of checkbox, show cards that have the same value as a label
  }

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
      <Filter sizeLabels={sizeLabels} akcGroupLabels={akcGroupLabels} coatLengthLabels={coatLengthLabels} handleToggle={handleToggle}/>
      <DogBreeds client={client} searchTerm={searchTerm} checkboxes={checkbox} sizeLabels={sizeLabels} akcGroupLabels={akcGroupLabels} coatLengthLabels={coatLengthLabels}/>
    </div>
  );
}
export default PageSetup;
