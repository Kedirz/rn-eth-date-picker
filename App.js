import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button } from 'react-native';
import { getTodayGeez, geezMonths, geezDays, makeBoard } from './utils/data';
import Days from './components/Days';
import Board from './components/Board';

export default function App() {
  let today = getTodayGeez();
  const [dateOnBoard, setDateOnBoard] = useState({
    month: today[0].month,
    monthGeez: geezMonths[today[0].month - 1],
    year: today[0].year,
    table: makeBoard(today[0].year, today[0].month)
  });

  const [dateOnHeader, setDateOnHeader] = useState({
    monthGeez: geezMonths[today[0].month - 1],
    yearGeez: today[0].year,
    dateGeez: today[0].day, // actual qen
    dayGeez: today[1], // day in the week like seno, or makseno
  });
  const [headerMonth, setHeaderMonth] = useState(geezMonths[today[0].month - 1]);
  const [headerDate, setHeaderDate] = useState(today[0].day);
  const [headerDay, setHeaderDay] = useState(today[1]);
  const [headerYear, setHeaderYear] = useState(today[0].year);

  function previousMonth() {
    const m = dateOnBoard.month, y = dateOnBoard.year;
    if (dateOnBoard.month === 1) {
      setDateOnBoard({
        month: 13,
        year: y - 1,
        monthGeez: geezMonths[12],
        table: makeBoard(y - 1, 13)
      });
    } else {
      setDateOnBoard({
        month: m - 1,
        year: y,
        monthGeez: geezMonths[m - 2],
        table: makeBoard(y, m - 1)
      })
    }
  };

  function nextMonth() {
    const m = dateOnBoard.month, y = dateOnBoard.year;
    if (dateOnBoard.month === 13) {
      setDateOnBoard({
        month: 1,
        year: y + 1,
        monthGeez: geezMonths[0],
        table: makeBoard(y + 1, 1),
      });
    } else {
      setDateOnBoard({
        month: m + 1,
        year: y,
        monthGeez: geezMonths[m],
        table: makeBoard(y, m + 1)
      })
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{color: 'silver', paddingBottom: 5}}> { headerYear } </Text>
        <Text style={{fontSize: 22, color: 'white'}}> { headerDay + ', ' + headerMonth + ' ' + headerDate} </Text>
      </View>

      <View style={styles.dateHeader}>
        {/* <Image
          style={{flex: 0.1, height: 15 }}
          source={require('./assets/previous.png')}
        /> */}
        <Button
          title="<"
          onPress={() => previousMonth()}
        />

        <View style={{flex: 1, fontWeight: 'bold', alignItems: 'center'}}>
          <Text style={{fontSize: 19}}>
            { dateOnBoard.monthGeez + ' ' + dateOnBoard.year }
          </Text>
        </View>

        <Button
          title=">"
          onPress={() => nextMonth()}
        />

        {/* <Image
          style={{flex: 0.1, height: 15 }}
          source={require('./assets/next.png')}
        /> */}
      </View>


      <View style={styles.board}>
        <Days />
        <Board table={dateOnBoard.table} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 30,
  },
  header: {
    flex: 0.4,
    backgroundColor: 'rgb(31, 105, 190)',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 15,
  },
  dateHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.3,
    flexDirection: 'row',
    padding: 15
  },
  board: {
    flex: 2.2,
    padding: 10,

    // backgroundColor: 'gray'
  },
  nextIcons: {
    // height: 100,
  }
});
