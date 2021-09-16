import useStateContext from '../Context';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { formatDate, prevDays, generateDateArr } from '../utils/date';
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from '../Post';
import styles from './style.module.css';
import Spinner from '../Spinner';

function Feed() {
  const interval = 1;

  const [startDate, setStartDate] = useState(prevDays(Date.now(), interval));
  const [endDate, setEndDate] = useState(Date.now());
  const [feed, setFeed] = useState([]);

  // returns APOD obj
  /*
  {
    copyright
    date,
    explanation,
    hdurl,
    media_type,
    service_version,
    title,
    url
  }
  */
  const cacheAPOD = (startDate, endDate) => {
    console.log(generateDateArr(startDate, endDate));
    /*
    const cache = localStorage.getItem('cache');
    postMap = new Map(JSON.parse(cache));
    if (postMap.get(apod.date)) {
      return;
    } else {
      postMap.set(apod.date, apod);
      localStorage.setItem('cache', JSON.stringify([...postMap]));
    }*/
  }

  /*
  const getCache = (dateArr) => {
    const cache = localStorage.getItem('cache');
    postMap = new Map(JSON.parse(cache));
    dateArr.forEach((date) => {
      if (postMap.has(date)) {
        return postMap.has(date);
      } else {
        cacheAPOD()
      }
    });
  }*/

  const getAPOD = async (startDate, endDate) => {
    console.log(startDate, endDate)
    await axios.get('https://api.nasa.gov/planetary/apod?api_key=s6qLszKpWb7eYpwtP6TFQZAnerodCr2KqDxqWyIS', {
      params: {
        start_date: formatDate(startDate),
        end_date: formatDate(endDate),
      }
    })
      .then((res) => {
        const apodArr = res.data.reverse();
        apodArr.filter((apod) => apod.media_type === 'image'); // remove videos
        const newFeed = [...feed, ...apodArr.filter((apod) => apod.media_type === 'image')];
        setFeed(newFeed);
        setStartDate((start) => prevDays(start, interval + 1));
        setEndDate((end) => prevDays(end, interval + 1));
      })
      .catch((err) => {
        console.log(err)
      });
  }

  useEffect(() => {
    console.log(cacheAPOD(startDate, endDate));
    getAPOD(startDate, endDate);
  }, []);


  const fetchMoreData = () => {
    getAPOD(startDate, endDate);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={feed.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<Spinner />}
        className={styles.feedContainer}
      >
        {feed.map((apod) => (
          <Post apod={apod} />
        ))}
      </InfiniteScroll>
    </>
  )
}

export default Feed;