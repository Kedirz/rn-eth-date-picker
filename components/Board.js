import { makeBoard } from '../utils/data';
import { FlatList, Text, StyleSheet, View, ScrollView } from 'react-native';

const Item = ({ title }) => (
  <View style={{padding: 20}}>
    <Text >{ title }</Text>
  </View>
);
export default function Board({year, month}) {
  const table = makeBoard(year, month);
  console.table(table)
  const renderItem = ({ item }) => (
    <Item title={ item.title } />
  );
  return (
    <View>
      {
        table.map( (row) => (<FlatList
          horizontal={true}
          data={row}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />))
      }
    </View>
  )
};

// export default function Board ({year, month}) {
//   // find starting of the month and length: PAGUME purposes
//   const table = makeBoard(year, month);

// };
