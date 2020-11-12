import { useRoutes } from 'hookrouter';
import React from 'react';
import NotFound from './pages/NotFound';
import routes from './routes';

const App = () => {
  const match = useRoutes(routes);
  return match || <NotFound />;
};

export default App;
