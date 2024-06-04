import { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import styles from '../styles.js';
import ColorCard from '../components/ColorCard.js';
import colors from '../data/colors.js';

const ListScreen = (props) => {
  const [colorList, setColorList] = useState(colors);

  const deleteGoalHandler = (id) => {
    setColorList(currentColors => {
      return currentColors.filter(color => color.hex !== id)
    })
  }

  return ( 
    <View style={[styles.layout, listStyles.layout]}>
      <Text style={[styles.title, listStyles.text]}>Color List</Text>
      <Text style={[styles.text, listStyles.text]}>Click the colors</Text>
      <FlatList 
        data={colorList}
        renderItem={({ item }) => (
          <ColorCard 
            key={item.hex}
            id={item.hex}
            name={item.name}
            hex={item.hex}
            rgb={item.rgb}
            text={item.text}
            onDeleteItem={deleteGoalHandler}
          />
        )}
      />
    </View>
  );
};

const listStyles = StyleSheet.create({
  layout: {
    justifyContent: 'top'
  },
  text: {
    textAlign: 'left'
  }
});

export default ListScreen;