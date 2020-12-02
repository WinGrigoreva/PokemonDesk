import getUrlWithParamConfig from './getUrlWithParamConfig';

describe('getUrlWithParamConfig', () => {
  test('Должна принимать 2 аргумента getPokemons и {}, на выходе получать {pathname, protocol, host, query: {} }', () => {
    const url = getUrlWithParamConfig('getPokemons', {});

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {},
    });
  });

  test('Должна принимать 2 аргумента getPokemons и {name: "Pikachu"}, на выходе получать {pathname, protocol, host, query: {name: "Pikachu"} }', () => {
    const url = getUrlWithParamConfig('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: { name: 'Pikachu' },
    });
  });

  test('Должна принимать 2 аргумента getPokemons и {id: 25}, на выходе получать {pathname, protocol, host, query: {} }', () => {
    const url = getUrlWithParamConfig('getPokemon', { id: 25 });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemon/25',
      query: {},
    });
  });
});
