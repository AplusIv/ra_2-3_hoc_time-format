/* eslint-disable react/prop-types */
import { DateTimePretty } from "./DateTime"

const Video = ({url, date}) => {
  return (
    <div className="video">
      <iframe src={url} allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <DateTimePretty date={date}/>      
    </div>
  )
}

export default Video