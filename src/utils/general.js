export function comma(text) {
  const strArr = text.toString().split(".");
  if (strArr.length > 1) {
    return strArr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "." + strArr[1];
  } else {
    return strArr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

export function thisMonth(date) {
  const currentDay = new Date(date);
  const theYear = currentDay.getFullYear();
  const theMonth = currentDay.getMonth();
  const startMonth = new Date(theYear, theMonth, 1).getTime();
  const endMonth = new Date(theYear, theMonth + 1, 1).getTime();
  return { startMonth, endMonth };
}

export function dateToString(date) {
  const year = new Date(date).getFullYear().toString();
  const month = (new Date(date).getMonth() + 1).toString();
  const day = new Date(date).getDate().toString();
  return year + "-" + month + "-" + day;
}
