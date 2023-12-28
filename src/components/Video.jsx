/* eslint-disable react/prop-types */
import DateTime from "./DateTime"
import DateTimePretty from "./DateTimePretty"
// import logProps from "./logProps"

const Video = ({url, date}) => {
  return (
    <div className="video">
      <iframe src={url} allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <DateTime date={date} />
      {/* <div>BlaBla</div> */}
      <div>{DateTimePretty(<DateTime date={date}/>)}</div>

      
    </div>
  )
}

export default Video