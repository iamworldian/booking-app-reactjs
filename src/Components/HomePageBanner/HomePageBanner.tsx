import { classJoiner } from '../../utils/utils';
import Styles from './HomePageBanner.module.css';
export default function HomePageBanner() {
  return (
    <>
      <div className={classJoiner(Styles, ['container'])}>
        <h1 className={classJoiner(Styles, ['title'])}>
          Your kind of vacation. Your kind of rental.
        </h1>
        <p className={classJoiner(Styles, ['description'])}>
          Get Rewarded from travels - Happy Journey
        </p>
      </div>
    </>
  );
}
