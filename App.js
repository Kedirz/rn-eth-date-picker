import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { getTodayGeez, geezMonths, geezDays } from './utils/data';
import Days from './components/Days';
import Board from './components/Board';

export default function App() {
  let curHeader = getTodayGeez();
  const [headerMonth, setHeaderMonth] = useState(geezMonths[curHeader[0].month - 1]);
  const [headerDate, setHeaderDate] = useState(curHeader[0].day);
  const [headerDay, setHeaderDay] = useState(curHeader[1]);
  const [headerYear, setHeaderYear] = useState(curHeader[0].year)


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text> { headerYear } </Text>
        <Text> { headerDay + ', ' + headerMonth + ' ' + headerDate} </Text>
      </View>

      <View style={styles.dateHeader}>
      <Image
          style={{flex: 0.1, height: 15 }}
          source={require('./assets/previous.png')}
        />
        <Text style={{flex: 1, alignItems: 'center' }}> {headerMonth + ' ' + headerYear} </Text>
        <Image
          style={{flex: 0.1, height: 15 }}
          source={require('./assets/next.png')}
        />
      </View>
      <View style={styles.board}>
        <Days />
        <Board year={2014} month={8} />
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
    flex: 0.5,
    backgroundColor: 'rgb(0, 93, 179)',
    padding: 15,
  },
  dateHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.3,
    flexDirection: 'row',
    backgroundColor: 'red',
    padding: 15
  },
  board: {
    flex: 2.2,
    padding: 15,

    // backgroundColor: 'gray'
  },
  nextIcons: {
    // height: 100,
  }
});
