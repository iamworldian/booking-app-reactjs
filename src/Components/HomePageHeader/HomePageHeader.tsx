import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { classJoiner } from '../../utils/utils';
import Styles from './HomePageHeader.module.css';
export default function HomePageHeader() {
  return (
    <>
      <div className={classJoiner(Styles, ['header'])}>
        <div className={classJoiner(Styles, ['headerContainer'])}>
          <div className={classJoiner(Styles, ['headerItem', 'active'])}>
            <FontAwesomeIcon icon={faBed}></FontAwesomeIcon>
            <span> Stays </span>
          </div>
          <div className={classJoiner(Styles, ['headerItem'])}>
            <FontAwesomeIcon icon={faPlane}></FontAwesomeIcon>
            <span> Flights </span>
          </div>
          <div className={classJoiner(Styles, ['headerItem'])}>
            <FontAwesomeIcon icon={faCar}></FontAwesomeIcon>
            <span> Car Rentals </span>
          </div>
          <div className={classJoiner(Styles, ['headerItem'])}>
            <FontAwesomeIcon icon={faBed}></FontAwesomeIcon>
            <span> Attractions </span>
          </div>
          <div className={classJoiner(Styles, ['headerItem'])}>
            <FontAwesomeIcon icon={faTaxi}></FontAwesomeIcon>
            <span> Airport Taxis </span>
          </div>
        </div>
      </div>
    </>
  );
}
