import { View, Text, Pressable } from 'react-native';
import styles from '../styles.js';
import { useState } from 'react';

const ColorCard = (props) => {
  const [showText, setShowText] = useState(false);
  const onPressColorIcon = () => {
    setShowText(!showText);
  };

  return (
    <View>
      <View style={styles.card}>
        <Pressable onPress={onPressColorIcon}>
          <View style={[styles.colorIcon, {backgroundColor: `#${props.hex}`}]}></View>
        </Pressable>
        <View style={styles.content}>
          <Text styles={styles.colorName}>{props.name}</Text>
          <Text styles={styles.text}>HEX: #{props.hex}</Text>
          <Text styles={styles.text}>RGB: rgb({props.rgb})</Text>
        </View>
      </View>

      {showText &&
        <View style={styles.card}>
          <Text styles={styles.text}>{props.text}</Text>
        </View>
      }
    </View>
  );
};

export default ColorCard;