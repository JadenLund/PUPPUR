import React, { useState } from "react";
import DogBreeds from "./DogBreeds";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import dogFilterHelpers from "./utilities/dogFilterHelpers";
import { Route, Routes } from "react-router-dom";
import Logout from "./Home";
import { Segment, Image, Header } from "semantic-ui-react";

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
            <SearchBar searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
          </Segment>
          <div className="filter-dogs">
            <Segment>
              <div>
                <Header textAlign="center" as="h2">
                  Filters
                </Header>
                <Image
                  size="small"
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/ce8b1e76965389.5c7945b0cffef.gif"
                />
              </div>
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
