import { useEffect, useState } from 'react';
import req from '../utils/requst';

const useData = <T>(endpoint: string, query: object, deps: any[] = []) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      setIsLoading(true);
      // const url = `${config.client.server.protocol}://${config.client.server.host}/${config.client.endpoint.getPokemons.uri.pathname}`;
      try {
        const result = await req<T>(endpoint, query);
        setData(result);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, deps);
  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
