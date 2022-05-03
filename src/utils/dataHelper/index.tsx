import moment from 'moment';

export const generateCreateBeforeUri = () =>
  encodeURIComponent(`${moment.utc().format('YYYY-MM-DDTHH:mm:ss')}+00:00`);

export const formatDate = (date: any, format: any) => {
  const momentDate = moment(date || null);

  return momentDate.isValid() ? momentDate.format(format) : '';
};
