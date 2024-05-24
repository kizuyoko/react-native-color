import { View, Text } from 'react-native';
import styles from '../styles.js';

const ColorCard = (props) => (
  <View style={styles.card}>
    <View style={[styles.colorIcon, {backgroundColor: `#${props.hex}`}]}></View>
    <View style={styles.content}>
      <Text styles={styles.colorName}>{props.name}</Text>
      <Text styles={styles.text}>HEX: #{props.hex}</Text>
      <Text styles={styles.text}>RGB: rgb({props.rgb})</Text>
    </View>
  </View>
);

export default ColorCard;