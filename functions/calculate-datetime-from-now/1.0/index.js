import moment from 'moment';
import 'moment-timezone';
const calculateDatetime = async ({
  timeZone,
  hours,
  days,
  minutes,
  seconds,
}) => {
  moment.tz.setDefault(timeZone);

  const returnDateTime = moment()
    .add(days, 'days')
    .add(hours, 'hours')
    .add(minutes, 'minutes')
    .add(seconds, 'seconds');

  return {
    dateTimeOutput: returnDateTime.format('YYYY-MM-DD hh:mm:ss'),
  };
};

export default calculateDatetime;
