import Video from './Video';
import {nanoid} from 'nanoid';

const Videolist = (props) => {
  return props.list.map(item => <Video key={nanoid()} url={item.url} date={item.date} />);
}

export default Videolist