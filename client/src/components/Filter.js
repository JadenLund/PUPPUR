import React, { useState } from "react";
import { Checkbox } from "semantic-ui-react";

function Filter({
  sizeLabels,
  akcGroupLabels,
  coatLengthLabels,
  handleToggle,
}) {
  return (
    <div className="checkbox-filters">
      <h3>Size</h3>
      {sizeLabels.map((label) => (
        <div key={label}>
          <Checkbox onChange={() => handleToggle(label)} label={label} />
        </div>
      ))}

      <h3>AKC Group</h3>
      {akcGroupLabels.map((label) => (
        <div key={label}>
          <Checkbox onChange={() => handleToggle(label)} label={label} />
        </div>
      ))}

      <h3>Coat Length</h3>
      {coatLengthLabels.map((label) => (
        <div key={label}>
          <Checkbox onChange={() => handleToggle(label)} label={label} />
        </div>
      ))}
    </div>
  );
}
export default Filter;
