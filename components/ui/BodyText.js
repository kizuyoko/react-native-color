import React from 'react';
import { Text } from 'react-native';
import styles from '../../styles';

const BodyText = ({ text, style }) => {
  return (
    <Text style={[styles.text, style]}>
      {text}
    </Text>
  );
};

export default BodyText;