import React from 'react';
import { Text } from 'react-native';
import styles from '../../styles';

const TitleText = ({ text, style }) => {
  return (
    <Text style={[styles.title, style]}>
      {text}
    </Text>
  );
};

export default TitleText;