import toCapitalizeFirstLetter from '../example';

describe('toCapitalizeFirstLetter', () => {
  test('Должна принимать пустую строку и возвращать пустую строку', () => {
    const prevStr = toCapitalizeFirstLetter('');

    expect(prevStr).toEqual('');
  });

  test('Должна принимать строку ПРИВЕТ и возвращать строку Привет', () => {
    const prevStr = toCapitalizeFirstLetter('ПРИВЕТ');

    expect(prevStr).toEqual('Привет');
  });

  test('Должна принимать строку привет и возвращать строку Привет', () => {
    const prevStr = toCapitalizeFirstLetter('привет');

    expect(prevStr).toEqual('Привет');
  });

  test('Должна принимать строку пРиВеТ и возвращать строку Привет', () => {
    const prevStr = toCapitalizeFirstLetter('пРиВеТ');

    expect(prevStr).toEqual('Привет');
  });

  test('Должна принимать строку пРИВЕТ и возвращать строку Привет', () => {
    const prevStr = toCapitalizeFirstLetter('пРИВЕТ');

    expect(prevStr).toEqual('Привет');
  });

  test('Должна принимать строку Привет и возвращать строку Привет', () => {
    const prevStr = toCapitalizeFirstLetter('Привет');

    expect(prevStr).toEqual('Привет');
  });
});
