import React, { useEffect, useState } from "react";
import {
  useLocation
} from "react-router-dom";
import { getSingle } from '../utils/getPhotos';
import Display from "./Display";
import Spinner from "../Spinner";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function PhotoDisplay() {
  let query = useQuery();
  const [apod, setAPOD] = useState(null);
  const [loading, setLoading] = useState(true);

  const getPhoto = async (date) => {
    await getSingle(date)
    .then((apod) =>  { 
      setAPOD(apod);
      setLoading(false);
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    getPhoto(query.get('date'));
  }, [])
  
  const openHome = () => {
    window.location.href = "/";
  }
  
  return (
    <>
      {loading && <Spinner className={StyleSheet.spinner}/>}
      {(apod !== undefined && apod !== null) && 
        <div>
          <Display apod={apod} closeDisplay={openHome}/>
        </div>
      }
    </>
  );
}
