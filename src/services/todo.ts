import axios from 'axios';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export function getTodos() {
  return axios.get<Todo[]>('https://jsonplaceholder.typicode.com/posts');
}
