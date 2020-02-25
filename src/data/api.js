import data from './data';

export const fetchData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 1200);
  });
};
