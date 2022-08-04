import { makeBoard } from '../utils/data';
import { FlatList, Text, StyleSheet, View, ScrollView, Dimensions } from 'react-native';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text >{ title }</Text>
  </View>
);
export default function Board({year, month}) {
  const table = makeBoard(year, month);
  const renderItem = ({ item }) => (
    <Item title={ item.title } />
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
