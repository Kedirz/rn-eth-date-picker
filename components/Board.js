import { staringDay, monthLength } from '../utils/data';

export function Board (month, year) {
  // find starting
  const startDay = staringDay(year, month);
  const monthLength = monthLength(year, month);
  let i = 0;
  let j = startDay;
  let curDay = 1;
  while (curDay < monthLength + 1) {

    if (j + 1 > 6) {
      i++, j = 0;
    }
    curDay++;
  }
};

// i = 0;
// j = staringDay;

// while(curDay < monthLength + 1) {
//   cell[i, j] = curDay;
//   if (j + 1 > 6) {
//     i++, j++;
//   }
//   curDay++;
// }
// start cell at [0, startingDay]
// curCell = prevCell