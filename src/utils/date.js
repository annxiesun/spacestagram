import moment from 'moment';

export function formatDate(date) {
  return moment(date).format('YYYY-MM-DD');
}

export function prevDays(date, numDays) {
  return formatDate(moment(date).subtract(numDays, 'days'));
}

export function generateDateArr(start, end) {
  const arr = [];
  let hi = 0;
  while (!moment(start).isSame(end)) {
    arr.push(start)
    moment(start).add(1, 'days');
    console.log(start, end)
    hi += 1;
    if (hi > 10) {
      break;
    }
  }
  return arr;
}