import React, { useEffect, useState } from 'react';
import { getTodos } from '@services/todo';
import Card from '@components/Card';
import { HomeWrapper, Title, TodoList } from './sytles';

function Home() {
  const [data, setData] = useState([]);

  const fetchTodo = async () => {
    try {
      const result = await getTodos();
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <HomeWrapper>
      <Title>Welcome to Next.js</Title>
      <TodoList>
        {data.map((item) => (
          <Card key={item.id}>{item.title}</Card>
        ))}
      </TodoList>
    </HomeWrapper>
  );
}

export default Home;
