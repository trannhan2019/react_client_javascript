import axiosClient from './axiosClient';

const productsApi = {
  getAll() {
    const url = '/products';
    return axiosClient.get(url);
  },

  get(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },

  create(data) {
    const url = '/products';
    return axiosClient.post(url, data);
  },

  findByTitle(title) {
    const url = `/products?title=${title}`;
    return axiosClient.get(url);
  },

  update(data, id) {
    const url = `/products/${id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
};

export default productsApi;
