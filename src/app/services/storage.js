const prefix = "ep-";

const get = (key) => {
  const value = localStorage.getItem(prefix + key);
  return JSON.parse(value);
};

const set = (key, value) => {
  const newValue = JSON.stringify(value);
  localStorage.setItem(prefix + key, newValue);
};

const remove = (key) => {
  localStorage.removeItem(prefix + key);
};

export default {
  get,
  set,
  remove,
};
