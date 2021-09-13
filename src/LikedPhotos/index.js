import React, { useEffect, useState } from "react";
import Post from "../Post";
import { getSingle } from '../utils/getPhotos';
import moment from "moment";

export default function LikedPhotos() {
  const [saved, setSaved] = useState([]);

  const getPhotos = async (dates) => {
    const requests = dates.map((date) => {
      return getSingle(date)
      .then((apod) =>  { 
        console.log(apod)
        return apod;
      })
      .catch((err) => console.log(err));
    });

    Promise.all(requests).then((newSaved) => {
      console.log(newSaved);
      const hi = newSaved.sort((apod1, apod2) => {
        const date1 = moment(apod1.date, 'YYYY-MM-DD');
        const date2 = moment(apod2.date, 'YYYY-MM-DD');
        if (date1.isBefore(date2)) {
          return 1;
        } else {
          return -1;
        }
      });

      console.log(newSaved);
      setSaved(newSaved);
    })
  }

  useEffect(() => {
    const store = localStorage.getItem('store');
    if (store) {
      const photoMap =  new Map(JSON.parse(store));
      const dates = Array.from(photoMap.keys());
      getPhotos(dates);
    }
  }, []);

  return (
    <>
      {saved.map((apod) => (
        <Post key={apod.title} apod={apod} />
      ))}
    </>
  );
}