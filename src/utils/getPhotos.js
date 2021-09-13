import axios from "axios";

export async function getSingle(date) {
  let apod;
  await axios.get('https://api.nasa.gov/planetary/apod?api_key=s6qLszKpWb7eYpwtP6TFQZAnerodCr2KqDxqWyIS', {
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
