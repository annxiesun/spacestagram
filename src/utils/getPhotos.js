import axios from "axios";
import { formatDate } from "./date";

export async function getSingle(date) {
  let apod;
  await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`, {
    params: {
      date: date
    }
  })
    .then((res) => {
      apod = res.data;
    })
    .catch((err) => {
      console.log(err)
    });
  return apod;
}

export async function getPhotoRange (startDate, endDate) {
  let apodArr;
  await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`, {
    params: {
      start_date: formatDate(startDate),
      end_date: formatDate(endDate),
    }
  })
    .then((res) => {
      const arr = res.data.reverse();
      arr.filter((apod) => apod.media_type === 'image'); // remove videos
      apodArr = arr;
    })
    .catch((err) => {
      console.log(err)
    });
  return apodArr;
}
