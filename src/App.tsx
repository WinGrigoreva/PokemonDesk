import { useRoutes } from 'hookrouter';
import React from 'react';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import routes from './routes';

const App = () => {
  const match = useRoutes(routes);
  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <NotFound />
  );
};

export default App;
