import moment from "moment/moment";

export const dateTimeToString = (dateStr: any) => {
  return moment(dateStr).format("ddd DD MMM YYYY HH:mm");
};
