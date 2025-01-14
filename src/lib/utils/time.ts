import moment from 'moment';

const now = () => {
  return moment().toISOString();
};

export {now};
