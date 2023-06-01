import { classJoiner } from '../../utils/utils';
import Style from './HomePageSearchBar.module.css';

export default function HomePageSearchBar() {
  return (
    <div className={classJoiner(Style, ['container'])}>
      <div className={classJoiner(Style, ['searchGroup'])}></div>
    </div>
  );
}
