import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from '../../styles';

const PrimaryButton = ({ title, onPress, btnStyle, btnTxtStyle }) => {
  return (
    <Pressable 
      style={[styles.primaryButtonContainer, btnStyle]} 
      onPress={onPress}
    >
      <Text style={[styles.button, btnTxtStyle]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default PrimaryButton;