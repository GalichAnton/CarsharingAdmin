export const dateParser = (date: string | number) => {
  const newDate = new Date(date)
    .toLocaleTimeString(navigator.language, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace(",", " ");
  return newDate;
};
