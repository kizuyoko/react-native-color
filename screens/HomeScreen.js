import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles.js';
import colors from '../data/colors.js';
import TitleText from '../components/ui/TitleText.js';
import BodyText from '../components/ui/BodyText.js';

const HomeScreen = () => {
  const colorLength = colors.length;
  const randomNumber = Math.floor(Math.random() * colorLength);
  const todaysColor = colors[randomNumber];

  return ( 
      <View style={styles.layout}>
        <TitleText text="Today's Color is: " />
        <BodyText 
          style={colorStyles.colorName}
          text={todaysColor.name}
        />
        <View style={colorStyles.colorIconCover}>
          <View style={[colorStyles.colorIcon, {backgroundColor: `#${todaysColor.hex}`}]}></View>
        </View>
        <BodyText text={`HEX: #${todaysColor.hex}`} />
        <BodyText text={`RGB: rgb(${todaysColor.rgb})`} />
        <BodyText text={todaysColor.text} />
      </View>
    );
}; 

const colorStyles = StyleSheet.create({
  colorName: {
    fontSize:30,
    fontWeight: 'bold',
    marginBottom: 0,
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