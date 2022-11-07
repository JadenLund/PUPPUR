function dogFilterHelpers() {
  const sizeLabels = ["Small", "Medium", "Large"];
  const akcGroupLabels = [
    "Sporting",
    "Herding",
    "Hound",
    "Working",
    "Terrier",
    "Toy",
    "Non-Sporting",
  ];
  const coatLengthLabels = ["Short", "Medium", "Long"];
  const allLabelsArray = [
    ...sizeLabels,
    ...akcGroupLabels,
    ...coatLengthLabels,
  ];
  const allLabelsObject = {};
  allLabelsArray.forEach((label) => (allLabelsObject[label] = false));

  return {
    sizeLabels,
    akcGroupLabels,
    coatLengthLabels,
    allLabelsArray,
    allLabelsObject
  };
}
export default dogFilterHelpers;
