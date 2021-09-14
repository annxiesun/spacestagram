import React, { useEffect, useState } from "react";
import {
  useLocation
} from "react-router-dom";
import { getSingle } from '../utils/getPhotos';
import Display from "./Display";

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
      {(apod !== undefined && apod !== null) && 
        <div>
          <Display apod={apod}/>
        </div>
      }
    </>
  );
}
