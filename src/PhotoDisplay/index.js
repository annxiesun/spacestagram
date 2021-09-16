import React, { useEffect, useState } from "react";
import {
  useLocation
} from "react-router-dom";
import { getSingle } from '../utils/getPhotos';
import Display from "./Display";
import Spinner from "../Spinner";
import styles from './style.module.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function PhotoDisplay() {
  let query = useQuery();
  const [apod, setAPOD] = useState(null);
  const [loading, setLoading] = useState(true);

  const getPhoto = async (date) => {
    const apod = await getSingle(date)
    .then((apod) =>  { 
      setAPOD(apod);
      setLoading(false);
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    getPhoto(query.get('date'));
  }, [])
  
  
  return (
    <>
      {loading && <Spinner className={StyleSheet.spinner}/>}
      {(apod !== undefined && apod !== null) && 
        <div>
          <Display apod={apod}/>
        </div>
      }
    </>
  );
}
