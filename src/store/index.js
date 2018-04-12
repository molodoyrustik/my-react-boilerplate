import storeProd from './configureStore.prod';

let store = {};

if (process.env.NODE_ENV === 'production') {
  store = storeProd
} else {
  store = storeProd
}

export default store;
