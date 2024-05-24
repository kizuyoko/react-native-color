import * as React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import styles from '../styles.js';
import ColorCard from './ColorCard.js';
import colors from '../data/colors.js';

const ListScreen = () => {
  return ( 
    <View style={[styles.layout, listStyles.layout]}>
      <Text style={[styles.title, listStyles.title]}>Color List</Text>
      <FlatList 
        data={colors}
        renderItem={({ item }) => (
          <ColorCard 
            key={item.hex}
            name={item.name}
            hex={item.hex}
            rgb={item.rgb}
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
  title: {
    textAlign: 'left'
  }
});

export default ListScreen;