import React, { useState } from "react";
import DogBreeds from "./DogBreeds";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import dogFilterHelpers from "./utilities/dogFilterHelpers";
import { Route, Routes } from "react-router-dom";
import Logout from "./Home";
import { Segment } from "semantic-ui-react";

import "./css_files/PageSetup.css";

function PageSetup({ client, setClient }) {
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
      {client ? (
        <div>
          <Segment>
            <div className="search-title">
              <h4>Filters</h4>
              <SearchBar
                searchTerm={searchTerm}
                onChangeSearch={setSearchTerm}
              />
            </div>
          </Segment>
          <div className="filter-dogs">
            <Segment>
              <Filter
                sizeLabels={sizeLabels}
                akcGroupLabels={akcGroupLabels}
                coatLengthLabels={coatLengthLabels}
                handleToggle={handleToggle}
              />
            </Segment>
            {/* <Segment> */}
              <DogBreeds
                client={client}
                searchTerm={searchTerm}
                checkboxes={checkbox}
                sizeLabels={sizeLabels}
                akcGroupLabels={akcGroupLabels}
                coatLengthLabels={coatLengthLabels}
              />
            {/* </Segment> */}
          </div>
        </div>
      ) : (
        <Logout setClient={setClient} />
      )}
    </div>
  );
}
export default PageSetup;
