import React, { useEffect, useState } from 'react';
import { prevDays } from '../utils/date';
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from '../Post';
import styles from './style.module.css';
import Spinner from '../Spinner';
import { getPhotoRange } from '../utils/getPhotos';

function Feed() {
  const interval = 1;

  const [startDate, setStartDate] = useState(prevDays(Date.now(), interval));
  const [endDate, setEndDate] = useState(Date.now());
  const [feed, setFeed] = useState([]);

  const getAPOD = async (startDate, endDate) => {
    const apodArr = await getPhotoRange(startDate, endDate);
    const newFeed = [...feed, ...apodArr.filter((apod) => apod.media_type === 'image')];
    setFeed(newFeed);
    setStartDate((start) => prevDays(start, interval + 1));
    setEndDate((end) => prevDays(end, interval + 1));
  }

  useEffect(() => {
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
          <Post apod={apod} key={apod.name}/>
        ))}
      </InfiniteScroll>
    </>
  )
}

export default Feed;