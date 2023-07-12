import IComplaint from "../types/complaint.type";
import ITemp from "../types/temp.type";
import ITotal from "../types/total.type";
import IWeatherDetail from "../types/weatherDetail.type";
import IWeatherItems from "../types/weatherItems.type";

export const detail: IWeatherDetail = {
  weather: "Mostly Sunny",
  now: 34,
  high: 37,
  low: 29,
  precipitation: 4,
  humidity: 51,
  wind: 14,
};
export const items: IWeatherItems[] = [
  {
    id: 1,
    time: "NOW",
    value: 34,
    img: "/images/cloud.png",
  },
  {
    id: 2,
    time: "11:00",
    value: 30,
    img: "/images/rain.png",
  },
  {
    id: 3,
    time: "12:00",
    value: 30,
    img: "/images/rain.png",
  },
  {
    id: 4,
    time: "13:00",
    value: 30,
    img: "/images/rain.png",
  },
  {
    id: 5,
    time: "14:00",
    value: 33,
    img: "/images/cloud.png",
  },
  {
    id: 6,
    time: "15:00",
    value: 33,
    img: "/images/cloud.png",
  },
];

export const array_weather = {
  detail,
  items,
};

export const array_temp: ITemp[] = [
  {
    id: 1,
    name: "TEMPERATURE",
    img: "/images/thermometer.png",
    value: 28.7,
    symbol: "\u00b0",
  },
  {
    id: 2,
    name: "HUMIDITY",
    img: "/images/humidity.png",
    value: 65,
    symbol: "\u0025",
  },
];

export const array_total: ITotal[] = [
  {
    id: 1,
    name: "CURRENT",
    value: 3,
    wc_value: 1,
    urinal_value: 2,
  },
  {
    id: 2,
    name: "LAST CLEANING",
    value: 4,
    wc_value: 1,
    urinal_value: 3,
  },
  {
    id: 3,
    name: "COUNTING",
    value: 35,
    wc_value: 10,
    urinal_value: 25,
  },
];

export const array_complaint: IComplaint[] = [
  {
    id: 1,
    name: "Trash Full",
    img: "/images/trash-can.png",
  },
  {
    id: 2,
    name: "Tissue Paper",
    img: "/images/toilet-paper.png",
  },
  {
    id: 3,
    name: "The water is not running",
    img: "/images/water.png",
  },
  {
    id: 4,
    name: "Smell",
    img: "/images/smell.png",
  },
  {
    id: 5,
    name: "Wet Floor",
    img: "/images/wet-floor.png",
  },
  {
    id: 6,
    name: "Flush Toilet",
    img: "/images/wc.png",
  },
  {
    id: 7,
    name: "Urinal",
    img: "/images/urinal.png",
  },
  {
    id: 8,
    name: "Others",
    img: "/images/other.png",
  },
];
