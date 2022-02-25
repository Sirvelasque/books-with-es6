import { DateTime } from '../node_modules/luxon/src/luxon.js';

const showdate = () => {
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  const div = document.querySelector('.date');
  div.innerHTML = now;
};

export default showdate;