import { useState } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const defaultWalk = {
  date: '',
  distance: ''
};

export default function WalksForm({ addWalk }) {
  const [walk, updateWalk] = useState(defaultWalk);

  const onInputChange = (event) => {
    updateWalk(prev => ({ ...prev, [event.target.id]: event.target.value }));
  };

  const formSubmit = (submit) => {
    submit.preventDefault();

    if (dayjs(walk.date, 'DD.MM.YY', true).isValid() && !isNaN(Number(walk.distance))) {
      walk.date = dayjs(walk.date, 'DD.MM.YY', true);
      walk.distance = +walk.distance;
      addWalk(walk);
      updateWalk({ ...defaultWalk });
    }
  };

  return (
    <form onSubmit={formSubmit} className="walks-form">
      <div className="input-wrapper">
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input onChange={onInputChange} id="date" name="date" value={walk.date} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="distance">Пройдено, км.</label>
        <input onChange={onInputChange} id="distance" name="distance" value={walk.distance} />
      </div>
      <button className="ok-btn">OK</button>
    </form>
  )
}
