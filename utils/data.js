import { ge, eg } from 'ethiopic-calendar';
import { DateTime } from "luxon";

export const getTodayGeez = () => {
  const now = new Date();
  const [year, month, date] = [now.getFullYear(), now.getMonth(), now.getDate()];
  return [ ge(year, month + 1, date), geezDays[now.getDay()] ];
};

export const staringDay = (geezYear, geezMonth) => {
  // convert to greg with day 1, then find associated day
  const { year, month, day } = eg(geezYear, geezMonth, 1);
  const gregDay = new Date(year, month - 1, day);
  return gregDay.getDay();
};

export const monthLength = (geezYear, geezMonth) => {
  let length = 30;
  // Incase the month is PAGUME
  if (geezMonth === 13) {
    // convert to greg, add 6, convert to ethipian
    const greg = eg(geezYear, geezMonth, 1);
    greg.day = greg.day + 5;
    const eth = ge(greg.year, greg.month, greg.day).day;
    if (eth === 6) {
      length = 6;
    } else if (eth === 1) {
      length = 5;
    }
  }
  return length;
};

export const makeBoard = (geezYear, geezMonth) => {
  let board = [];
  const startDay = staringDay(geezYear, geezMonth);
  console.log('Year: ', geezYear, 'month: ', geezMonth, geezDays[startDay])
  const lengthOfMonth = monthLength(geezYear, geezMonth);
  let i = 0, j = 0;
  while (i < startDay) {
    board.push({id: `${geezYear}${geezMonth}${i}empty`, title: ''});
    i++;
  }
  i = 1;
  while (i < lengthOfMonth + 1) {
    board.push({id: `${geezYear}${geezMonth}${i}`, title: i});
    i++;
  }
  while (board.length % 7 !== 0) {
    board.push('')
  }
  return board;
};

export const geezMonths = [
  "መስከረም", "ጥቅምት", "ኅዳር", "ታኅሣሥ", "ጥር", "የካቲት", "መጋቢት",
   "ሚያዝያ", "ግንቦት", "ሰኔ", "ሐምሌ", "ነሐሴ", "ጳጉሜን"
  ]
export const geezDays = [ "እሑድ", "ሰኞ", "ማክሰ", "ረቡዕ", "ሐሙስ", "ዓርብ", "ቅዳሜ" ];
export const geezDaysShort = [
  { id: 'sunShortAm', title: "እ" },
  { id: 'monShortAm', title: "ሰ" },
  { id: 'tueShortAm', title: "ማ" },
  { id: 'wedShortAm', title: "ረ" },
  { id: 'thuShortAm', title: "ሐ" },
  { id: 'firShortAm', title: "ዓ" },
  { id: 'satShortAm', title: "ቅ" },
]

/*
  en: [
    "Mäskäräm", "Ṭəqəmt", "Ḫədar", "Taḫśaś", "Ṭərr", "Yäkatit",
    "Mägabit", "Miyazya", "Gənbo", "Säne", "Ḥamle", "Nähase", "Ṗagume"
  ],
  am: [
    "መስከረም", "ጥቅምት", "ኅዳር", "ታኅሣሥ", "ጥር", "የካቲት", "መጋቢት",
    "ሚያዝያ", "ግንቦት", "ሰኔ", "ሐምሌ", "ነሐሴ", "ጳጉሜን"
  ]



  en: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],




  en: [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ],
  am: [ "እ", "ሰ", "ማ", "ረ", "ሐ", "ዓ", "ቅ" ]
*/