import { useState } from 'react';
import { Sheet, Text, View, Image, FlatList} from 'react-native';
import { geezDaysShort } from '../utils/data';

const Item = ({ title }) => (
  <View style={{padding: '20%'}}>
    <Text style={{color: 'grey'}}>{ title }</Text>
  </View>
);
export default function Days() {
  const renderItem = ({ item }) => (
    <Item title={ item.title } />
  );
  return (
    <View>
      <FlatList
        horizontal={true}
        data={geezDaysShort}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
};