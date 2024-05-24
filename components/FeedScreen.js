import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';

const FeedScreen = () => {
  return ( 
    <View style={styles.layout}>
      <Text style={styles.title}>Feed</Text>
    </View>
  );
};

export default FeedScreen;