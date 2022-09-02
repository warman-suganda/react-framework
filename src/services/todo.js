import axios from 'axios';

export function getTodos() {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
}
