import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles.js';
import colors from '../data/colors.js';

const HomeScreen = () => {
  const colorLength = colors.length;
  const randomNumber = Math.floor(Math.random() * colorLength);
  const todaysColor = colors[randomNumber];

  return ( 
      <View style={styles.layout}>
        <Text style={styles.title}>Today's Color is: </Text>
        <Text style={[styles.title, colorStyles.colorName]}>{todaysColor.name}</Text>
        <View style={colorStyles.colorIconCover}>
          <View style={[colorStyles.colorIcon, {backgroundColor: `#${todaysColor.hex}`}]}></View>
        </View>
        <Text style={styles.text}>HEX: #{todaysColor.hex}</Text>
        <Text style={styles.text}>RGB: ({todaysColor.rgb})</Text>
        <Text style={styles.text}>{todaysColor.text}</Text>
      </View>
    );
}; 

const colorStyles = StyleSheet.create({
  colorName: {
    fontSize:30
  },
  colorIconCover: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  colorIcon: {
    width: '50%',
    height: 60,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 20
  }
});

export default HomeScreen;