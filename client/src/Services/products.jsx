import axios from 'axios';

const baseProjectService = axios.create({
  baseURL: '/products'
});

const getAll = () => {
  return baseProjectService
    .get('/list')
    .then((result) => {
      const products = result.data.projects;
      return Promise.resolve(products);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export { getAll };
