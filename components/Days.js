import { useState } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, FlatList} from 'react-native';
import { geezDaysShort } from '../utils/data';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={{color: 'grey'}}>{ title }</Text>
  </View>
);
export default function Days({}) {
  const renderItem = ({ item }) => (
    <Item title={ item.title } />
  );
  return (
    <View>
      <FlatList
        data={geezDaysShort}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={7}
      />
    </View>
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