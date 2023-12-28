/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import TimeFormater from "./TimeFormater"


const DateTime = ({date}) => {
  return (
    <p className="date">{date}</p>
  )
}

// export default DateTime
// export default DateTimePretty(DateTime);
export const DateTimePretty = TimeFormater(DateTime);