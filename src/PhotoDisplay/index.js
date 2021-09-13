import React, { useEffect, useState } from "react";
import {
  Link,
  useLocation
} from "react-router-dom";
import Post
  from "../Post";
import axios from "axios";
import { getSingle } from '../utils/getPhotos';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function PhotoDisplay() {
  let query = useQuery();
  const [apod, setAPOD] = useState(null);

  const getPhoto = async (date) => {
    const apod = await getSingle(date)
    .then((apod) =>  { 
      setAPOD(apod);
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    getPhoto(query.get('date'));
  }, [])
  
  return (
    <>
      {(apod !== undefined && apod !== null) && <Post apod={apod} />}
    </>
  );
}