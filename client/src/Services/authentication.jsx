import axios from 'axios';

const baseAuthenticationService = axios.create({
  baseURL: '/authentication'
});

const login = (body) => {
  return baseAuthenticationService
    .post('/login', body)
    .then((result) => {
      const user = result.data.user;
      return Promise.resolve(user);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

const register = (body) => {
  return baseAuthenticationService
    .post('/register', body)

    .then((result) => {
      const user = result.data.user;
      return Promise.resolve(user);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

const logout = () => {
  return baseAuthenticationService
    .post('/logout')
    .then((response) => {
      return Promise.resolve();
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

const loadAuthenticatedUser = () => {
  return baseAuthenticationService
    .get('/me')
    .then((response) => {
      const user = response.data.user;
      return Promise.resolve(user);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export { register, login, logout, loadAuthenticatedUser };
