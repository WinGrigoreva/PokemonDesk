import Url from 'url';
import getUrlWithParamConfig from './getUrlWithParamConfig';

async function req(endpoint: string, query: object) {
  const uri = Url.format(getUrlWithParamConfig(endpoint, query));
  const result = await fetch(uri).then((res) => res.json());
  return result;
}
export default req;
