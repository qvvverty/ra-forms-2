import { useState } from 'react';
import WalksDisplay from "./WalksDisplay";
import WalksForm from "./WalksForm";
import dayjs from 'dayjs';

const initialWalks = [
  {
    date: dayjs('12.02.21', 'DD.MM.YY', true),
    distance: 5.2
  },
  {
    date: dayjs('13.02.21', 'DD.MM.YY', true),
    distance: 3
  },
  {
    date: dayjs('14.02.21', 'DD.MM.YY', true),
    distance: 7.6
  },
];

const walksSortFn = (a, b) => {
  if (a.date > b.date) return 1;
  if (a.date === b.date) return 0;
  if (a.date < b.date) return -1;
}

export default function WalksManager() {
  const [walks, updateWalks] = useState(initialWalks);

  const addWalk = newWalk => {
    const walksCopy = [...walks];

    let foundIndex = walksCopy.findIndex(walk => +walk.date === +newWalk.date);
    if (foundIndex >= 0) {
      walksCopy[foundIndex].distance += newWalk.distance;
    } else {
      walksCopy.push(newWalk);
    }

    walksCopy.sort(walksSortFn);

    updateWalks(walksCopy);
  };

  const removeWalk = walkToRemoveDateStr => {
    const walkToRemoveDate = dayjs(walkToRemoveDateStr, 'DD.MM.YY', true);
    updateWalks(prev => {
      const walksCopy = [...prev];
      walksCopy.splice(prev.findIndex(walk => +walk.date === +walkToRemoveDate), 1);
      return walksCopy;
    });
  };
  
  return (
    <>
      <WalksForm addWalk={addWalk} />
      <WalksDisplay walks={walks} removeWalk={removeWalk} />
    </>
  )
}
