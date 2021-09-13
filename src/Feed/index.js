import useStateContext from '../Context';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { formatDate, prevDays } from '../utils/date';
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from '../Post';

function Feed() {
  const interval = 5;

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
  const getAPOD = async (startDate, endDate) => {
    console.log(startDate, endDate)
    await axios.get('https://api.nasa.gov/planetary/apod?api_key=s6qLszKpWb7eYpwtP6TFQZAnerodCr2KqDxqWyIS', {
      params: {
        start_date: formatDate(startDate),
        end_date: formatDate(endDate),
      }
    })
      .then((res) => {
        const apod = res.data.reverse();
        const newFeed = [...feed, ...apod];
        console.log(apod)
        setFeed(newFeed);
        setStartDate((start) => prevDays(start, interval + 1));
        setEndDate((end) => prevDays(end, interval + 1));
      })
      .catch((err) => {
        console.log(err)
      });
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
        loader={<h4>Loading...</h4>}
      >
        {feed.map((apod) => (
          <Post apod={apod} />
        ))}
      </InfiniteScroll>
    </>
  )
}

export default Feed;