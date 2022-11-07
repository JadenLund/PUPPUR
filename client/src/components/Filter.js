import React, { useState } from "react";
import { Checkbox } from "semantic-ui-react";

function Filter({  sizeLabels, akcGroupLabels, coatLengthLabels, handleToggle }) {

  return (
    <div className="checkbox-filters">
      <h3>Size</h3>
      {sizeLabels.map((label) => (
        <Checkbox onChange={() => handleToggle(label)} label={label} />
      ))}

      <h3>AKC Group</h3>
      {akcGroupLabels.map((label) => (
        <Checkbox onChange={() => handleToggle(label)} label={label} />
      ))}

      <h3>Coat Length</h3>
      {coatLengthLabels.map((label) => (
        <Checkbox onChange={() => handleToggle(label)} label={label} />
      ))}
    </div>
  );
}
export default Filter;
