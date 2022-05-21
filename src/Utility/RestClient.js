import axios from 'axios';

export const HttpMethods = {
  get: 'get',
  post: 'post',
  put: 'put',
  delete: 'delete',
};

export const RestClient = async (options) => {
  const axiosInstance = axios.create({
    validateStatus(status) {
      if (status === 401 || status === 403) {
        //window.location.replace(TOOLKIT_FORBIDDEN_PAGE_URL);
      }
      return status >= 200 && status <= 503;
    },
  });
  let axiosParams = {
    method: options.method,
    url: options.url,
    data: options.body || {},
    headers: { ...options.headers },
  };
  if (options.responseType) {
    axiosParams = { ...axiosParams, responseType: options.responseType };
  }
  const response = await axiosInstance(axiosParams);
  return response;
};
