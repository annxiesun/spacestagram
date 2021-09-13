import moment from 'moment';

export function formatDate(date) {
  return moment(date).format('YYYY-MM-DD');
}

export function prevDays(date, numDays) {
  return formatDate(moment(date).subtract(numDays, 'days'));
}
