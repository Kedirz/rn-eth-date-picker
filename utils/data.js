import { ge, eg } from 'ethiopic-calendar';
import { DateTime } from "luxon";

export const getTodayGeez = () => {
  const now = DateTime.now();
  const [year, month, date] = [now.year, now.month, now.day];
  return [ ge(year, month, date), geezDays[now.weekday] ];
};

export const staringDay = (year, month) => {
  const adjacentGreg = eg(year, month, 1);
  const day = DateTime.fromObject(adjacentGreg);
  return day.weekday;
};

export const monthLength = (year, month) => {
  let length = 30;
  if (month === 12) {
    const adjacentGreg = eg(year, month, 1);
    if (isGregorianLeap(adjacentGreg.year)) {
      length = 6;
    } else {
      length = 5;
    }
    return length
  }
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

// en: [
//   "Mäskäräm", "Ṭəqəmt", "Ḫədar", "Taḫśaś", "Ṭərr", "Yäkatit",
//   "Mägabit", "Miyazya", "Gənbo", "Säne", "Ḥamle", "Nähase", "Ṗagume"
// ],
// am: [
//   "መስከረም", "ጥቅምት", "ኅዳር", "ታኅሣሥ", "ጥር", "የካቲት", "መጋቢት",
//   "ሚያዝያ", "ግንቦት", "ሰኔ", "ሐምሌ", "ነሐሴ", "ጳጉሜን"
// ]



// en: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],




// en: [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ],
// am: [ "እ", "ሰ", "ማ", "ረ", "ሐ", "ዓ", "ቅ" ]