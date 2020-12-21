import axios from 'axios';
import { IHttpMethod } from '../../ts/interfaces/enum/fetch-enums';
import { IFetch } from '../../ts/interfaces/fetch-interfaces';

const fetch = ({
  method = IHttpMethod.GET,
  path,
  headers,
  responseType,
  data,
  service,
}: IFetch) => {
  return new Promise(async (resolve, reject) => {
    if (!service) throw Error('br.com.hst.base.url.not.found');
    axios({
      headers: {
        ...headers,
        Authorization: sessionStorage.getItem('token'),
      },
      url: `${getURl(service)}${path}`,
      method,
      responseType,
      data,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        if (error.response) {
          reject(error.response);
        } else {
          reject(handleUnknowError());
        }
      });
  });
};

function getURl(service: string) {
  const baseURLS: string[] =
    process.env.REACT_APP_SERVICES_URL?.split('|') || [];
  const baseURL: string[] =
    baseURLS?.filter((url) => url.includes(service)) || [];
  if (!baseURL[0]) {
    throw Error('br.com.hst.product.url.not.found');
  }
  return baseURL[0].split(';')[1] || '';
}

function handleUnknowError() {
  const unknownError: any = {
    response: {
      data: {
        responseDescription: 'br.com.hst.unknown.error',
      },
    },
  };
  return unknownError;
}

export default fetch;