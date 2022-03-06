import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import DefaultLayout from '@/layout/DefaultLayout';
import { useGetPostsQuery } from '@/services/posts.service';
import Dashboard from '@/views/Dashboard';
import Users from '@/views/Users';

import './App.css';

function App() {
  // const [count, setCount] = useState(0);
  // const { data, isError, isLoading, ...rest } = useGetPostsQuery(
  //   {},
  //   {
  //     // pollingInterval: 1000,
  //     // skip: false,
  //     // refetchOnMountOrArgChange: true,
  //     // refetchOnFocus: true,
  //     // refetchOnReconnect: true,
  //   }
  // );

  return (
    <main id="app">
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </DefaultLayout>
    </main>
  );
}

export default App;
