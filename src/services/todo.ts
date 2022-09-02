import axios from 'axios';

interface Todo {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getTodos() {
  try {
    const todo = await axios.get<Todo[]>(
      'https://jsonplaceholder.typicode.com/posts',
    );
    console.log(
      'each data',
      todo.data.map((item) => item.body),
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
    }
    console.log('unexpected error: ', error);
  }
}

getTodos();
