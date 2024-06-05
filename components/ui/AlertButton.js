import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from '../../styles';

const AlertButton = ({ title, onPress, btnStyle, btnTxtStyle }) => {
  return (
    <Pressable 
      style={[styles.alertButtonContainer, btnStyle]} 
      onPress={onPress}
    >
      <Text style={[styles.button, btnTxtStyle]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default AlertButton;