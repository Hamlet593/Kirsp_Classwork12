import {months} from '../constants/months.js'

export function getDate(){
  const today = new Date();
  const day = today.getDate();
  const month = months[today.getMonth()];
  const year = today.getFullYear();
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const date = `${day}/${month}/${year}. Time is ${hours}:${minutes}`
  return date;
}  