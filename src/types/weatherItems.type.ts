// export default interface IWeather {
//   // id: number;
//   // time: string;
//   // value: number;
//   // img: string;
//   detail: {
//     weather: string;
//     now: number;
//     high: number;
//     low: number;
//     precipitation: number;
//     humidity: number;
//     wind: number;
//   };
//   items: {
//     id: number;
//     time: string;
//     value: number;
//     img: string;
//   };
// }

// interface IWeatherDetail {
//   weather: string;
//   now: number;
//   high: number;
//   low: number;
//   precipitation: number;
//   humidity: number;
//   wind: number;
// }

export default interface IWeatherItems {
  id: number;
  time: string;
  value: number;
  img: string;
}
