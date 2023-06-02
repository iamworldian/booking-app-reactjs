import { faBed, faCalendar, faPerson } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import format from 'date-fns/format';
import { useState } from 'react';
import { DateRange } from 'react-date-range';

import { classJoiner } from '../../utils/utils';
import Style from './HomePageSearchBar.module.css';

export default function HomePageSearchBar() {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [showDatePicker, setDatePicker] = useState(false);
  const [showPersonDetails, setPersonDetails] = useState(false);
  const [persons, setPersons] = useState({
    adult: 0,
    child: 0,
    room: 0,
  });

  const handlePersonsState = (name, value) => {
    console.log(name);
    setPersons((prev) => {
      return {
        ...prev,
        [name]: persons[name] + value,
      };
    });
  };
  return (
    <div className={classJoiner(Style, ['container'])}>
      <div className={classJoiner(Style, ['searchGroup'])}>
        <div className={classJoiner(Style, ['searchSpace'])}>
          <FontAwesomeIcon icon={faBed} />
          <input type="text" placeholder="Where ?" />
        </div>

        <div className={classJoiner(Style, ['searchSpace'])}>
          <FontAwesomeIcon icon={faCalendar} />
          <div className={classJoiner(Style, ['dateMobile'])}>
            <input
              type="text"
              placeholder="Date to Date ?"
              value={`${format(date[0].startDate, 'mm/dd/yyyy')} to ${format(
                date[0].endDate,
                'dd/mm/yyyy',
              )}`}
              onClick={() => setDatePicker(!showDatePicker)}
            />
            {showDatePicker && (
              <DateRange
                onChange={(item) => setDate([item.selection])}
                months={1}
                ranges={date}
                preventSnapRefocus={true}
                calendarFocus="backwards"
                className={classJoiner(Style, ['date'])}
              />
            )}
          </div>
        </div>

        <div className={classJoiner(Style, ['searchSpace'])}>
          <FontAwesomeIcon icon={faPerson} />
          <input
            type="text"
            placeholder="Persons"
            value={`${persons.adult} Adult - ${persons.child} Child - ${persons.room} Room`}
            onClick={() => setPersonDetails(!showPersonDetails)}
          />
          {showPersonDetails && (
            <div className={classJoiner(Style, ['persons'])}>
              <div className={classJoiner(Style, ['personTypes'])}>
                <p>Adult </p>
                <button
                  className={classJoiner(Style, ['prsnBtn'])}
                  onClick={() => {
                    handlePersonsState('adult', +1);
                  }}
                >
                  +{' '}
                </button>
                <p>{persons.adult}</p>
                <button
                  className={classJoiner(Style, ['prsnBtn'])}
                  onClick={() => {
                    handlePersonsState('adult', -1);
                  }}
                >
                  -{' '}
                </button>
              </div>

              <div className={classJoiner(Style, ['personTypes'])}>
                <p>Child </p>
                <button
                  className={classJoiner(Style, ['prsnBtn'])}
                  onClick={() => {
                    handlePersonsState('child', +1);
                  }}
                >
                  +{' '}
                </button>
                <p>{persons.child}</p>
                <button
                  className={classJoiner(Style, ['prsnBtn'])}
                  onClick={() => {
                    handlePersonsState('child', -1);
                  }}
                >
                  -{' '}
                </button>
              </div>

              <div className={classJoiner(Style, ['personTypes'])}>
                <p>Room</p>
                <button
                  className={classJoiner(Style, ['prsnBtn'])}
                  onClick={() => {
                    handlePersonsState('room', +1);
                  }}
                >
                  +{' '}
                </button>
                <p>{persons.room}</p>
                <button
                  className={classJoiner(Style, ['prsnBtn'])}
                  onClick={() => {
                    handlePersonsState('room', -1);
                  }}
                >
                  -{' '}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className={classJoiner(Style, ['searchSpace'])}>
          <button className={classJoiner(Style, ['btn'])} type="submit">
            SEARCH
          </button>
        </div>

        <div className={classJoiner(Style, ['searchSpace'])}></div>
        <div className={classJoiner(Style, ['searchSpace'])}></div>
      </div>
    </div>
  );
}
