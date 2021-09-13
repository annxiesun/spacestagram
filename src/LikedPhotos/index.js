import React, { useEffect, useState } from "react";
import Post from "../Post";
import { getSingle } from '../utils/getPhotos';

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
      console.log('hi', newSaved);
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