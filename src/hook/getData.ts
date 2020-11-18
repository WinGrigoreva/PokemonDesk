import { useEffect, useState } from 'react';
import { IPokemonCardProps } from '../components/PokemonCard';
import req from '../utils/requst';

interface IData {
  total: number;
  count: number;
  offset: number;
  limit: number;
  pokemons: [el: IPokemonCardProps];
}
const useData = (endpoint: string, query: object, deps: any[] = []) => {
  const [data, setData] = useState<IData>({
    total: 0,
    count: 0,
    offset: 0,
    limit: 0,
    pokemons: new Array<IPokemonCardProps>(),
  } as IData);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      // const url = `${config.client.server.protocol}://${config.client.server.host}/${config.client.endpoint.getPokemons.uri.pathname}`;
      try {
        const result = await req(endpoint, query);
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
