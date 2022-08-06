import {useState} from 'react';
import { makeBoard } from '../utils/data';
import { FlatList, Text, StyleSheet, View, ScrollView, Dimensions, TouchableHighlight } from 'react-native';

const Item = ({ title, id, today, handleDayPress }) => {
  const [pressedDay, setPressedDay] = useState(today);

  return (
    <View style={styles.item}>
      <TouchableHighlight onPress={() => {
          handleDayPress(id);
          setPressedDay(id);
        }}>
        {
          id === pressedDay ? <Text style={{backgroundColor: 'rgb(31, 105, 190)', color: 'white'}}>{ title }</Text> :
          1 === 1 ? <Text>{ title }</Text> : <Text>{'hello'}</Text>
        }
      </TouchableHighlight>
    </View>
  );
};
export default function Board({table, today, handleDayPress }) {

  const renderItem = ({ item }) => (
    <Item title={ item.title } id={ item.id } today={today} handleDayPress={handleDayPress} />
  );
  return (
    <FlatList
      data={table}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={7}
    />
  )
};
const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / 7,
  }
});
