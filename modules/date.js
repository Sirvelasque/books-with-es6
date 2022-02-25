import { DateTime } from '../node_modules/luxon/src/luxon.js';

const showdate = () => {
  const div = document.querySelector('.date');
  const now = DateTime.now();
  div.innerHTML = `${now.year} / ${now.month} / ${now.day}`;
};

export default showdate;