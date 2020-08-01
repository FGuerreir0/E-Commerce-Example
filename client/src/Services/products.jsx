import axios from 'axios';

const baseProjectService = axios.create({
  baseURL: '/products'
});

const getAll = () => {
  return baseProjectService
    .get('/all')
    .then((result) => {
      const products = result.data.products;
      return Promise.resolve(products);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

const getCategory = (body) => {
  console.log('chamou service');
  return baseProjectService
    .post('/category', body)
    .then((result) => {
      console.log(result);
      const products = result.data.products;
      return Promise.resolve(products);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export { getAll, getCategory };
