import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';

const HomeScreen = () => {
  return ( 
      <View style={styles.layout}>
        <Text style={styles.title}>Hi!</Text>
        <Text style={styles.text}>Explore the app with the bottom tabs.</Text>
      </View>
    );
}; 

export default HomeScreen;