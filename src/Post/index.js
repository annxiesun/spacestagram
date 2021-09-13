import React, { useEffect, useState } from 'react';

export default function Post ({ apod }) {
  const {
    copyright,
    date,
    explanation,
    hdurl,
    media_type,
    service_version,
    title,
    url
  } = apod;

  const [like, setLike] = useState(false);
  const [showLink, setShowLink] = useState(false);

  useEffect(() => {
    const store = localStorage.getItem('store');
    if (store) {
      const photoMap =  new Map(JSON.parse(store));
      if (photoMap.has(date)) {
        setLike(true);
      }
    }
  }, []);

  useEffect(() => {
    const store = localStorage.getItem('store');
    var photoMap;
    if (store) {
      photoMap =  new Map(JSON.parse(store));
    } else {
      photoMap = new Map();
    }
    if (like) {
      photoMap.set(date, like);
    } else {
      photoMap.delete(date);
    }
    localStorage.setItem('store', JSON.stringify([...photoMap]));
  }, [like]);

  return (
    <div>
      <img src={url} />
      <h1>{title}</h1>
      <button onClick={() => setLike((prev) => (!prev))}>Like</button>
      <button onClick={() => setShowLink((prev) => (!prev))}>Link</button>
      {like && <p>Liked!</p>}
      {showLink && <a href={window.location.origin + '/photo?date='+ date}>{window.location.origin + '/photo?date='+ date }</a>}
    </div>
  )
}