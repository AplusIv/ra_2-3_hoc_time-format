/* eslint-disable react/prop-types */
import DateTime from "./DateTime"

const Video = ({url, date}) => {
  return (
    <div className="video">
      <iframe src={url} allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <DateTime date={date} />
    </div>
  )
}

export default Video