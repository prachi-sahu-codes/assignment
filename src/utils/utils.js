export const convertDateFormat = (inputDateString) => {
  const splitDate = inputDateString.split("/");
  const finalDate = splitDate[1] + "/" + splitDate[0] + "/" + splitDate[2];

  return finalDate;
};
