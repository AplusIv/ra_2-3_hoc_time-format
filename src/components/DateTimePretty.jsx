/* eslint-disable react/prop-types */
// import React from 'react'
// import DateTime from './DateTime'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);


// Рабочий вариант
const DateTimePretty = (WrappedComponent) => {

  // eslint-disable-next-line react/display-name
  return (props) => {
    console.log(props);
    const videoDate = dayjs(props.date);
    console.log(videoDate);
    const now = dayjs();

    let result = '';
    if (videoDate.isBefore(now)) {
      const diffInDays = now.diff(videoDate, 'day');
      const diffInHours = now.diff(videoDate, 'hour');
      const diffInMinutes = now.diff(videoDate, 'minute');  
      result = (diffInDays >= 1) ? `${diffInDays} дней назад` : (diffInHours < 1) ? `${diffInMinutes} минут назад` : `${diffInHours} часов назад`;  
    } else {
      result = 'Ошибка в дате видео';
    }

    return (<div>DateTimePretty 
      <WrappedComponent {...props} date={result}/>
    </div>)
  }
}

export default DateTimePretty
