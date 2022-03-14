export const dateCalc = (
  dateForm: string | number,
  dateTo: string | number
) => {
  const dateFromNumber =
    typeof dateForm === "string" ? Date.parse(dateForm) : dateForm;
  const dateToNumber = typeof dateTo === "string" ? Date.parse(dateTo) : dateTo;

  if (dateToNumber > dateFromNumber) {
    const time = dateToNumber - dateFromNumber;
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const duration = `${days === 0 ? "" : days + "д"} ${
      hours === 0 ? "" : hours + "ч"
    }  ${minutes === 0 ? "" : minutes + "м"}`;
    return duration;
  }
};
