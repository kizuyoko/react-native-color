import { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import styles from '../styles.js';
import ColorCard from '../components/ColorCard.js';
import colors from '../data/colors.js';
import TitleText from '../components/ui/TitleText.js';
import BodyText from '../components/ui/BodyText.js';

const ListScreen = (props) => {
  const [colorList, setColorList] = useState(colors);

  const deleteGoalHandler = (id) => {
    setColorList(currentColors => {
      return currentColors.filter(color => color.hex !== id)
    })
  }

  return ( 
    <View style={[styles.layout, listStyles.layout]}>
      <TitleText 
        text="Color List" 
        style={listStyles.text} 
      />
      <BodyText 
          style={listStyles.text}
          text='Click the colors'
        />
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
    justifyContent: 'top',
    marginTop: 40
  },
  text: {
    textAlign: 'left'
  }
});

export default ListScreen;