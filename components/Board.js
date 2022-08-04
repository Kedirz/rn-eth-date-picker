import { staringDay, monthLength } from '../utils/data';

export default function Board (year, month) {
  // find starting of the month and length: PAGUME purposes
  const startDay = staringDay(year, 12);
  const lengthOfMonth = monthLength(year, month);
  console.log('hello :', lengthOfMonth, startDay);
  let i = 0;
  let j = startDay;
  let curDay = 1;
  let board = [[]];
  const daysInMonth = (lengthOfMonth) => {
    let counter = 0;
    while (curDay < lengthOfMonth + 1) {
      if (counter < j) {
        board[i].push('');
      } else {
        board[i].push(`${curDay}`);
      }
      curDay++;
      if (j + 1 > 6) {
        i++;
        if (curDay < lengthOfMonth + 1) {
          board.push([]);
        }
      }
      j++;
    }
  };
  console.log(board[0])
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