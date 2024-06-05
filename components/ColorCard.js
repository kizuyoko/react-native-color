import { View, Text, Pressable, Button } from 'react-native';
import styles from '../styles.js';
import { useState } from 'react';
import TitleText from './ui/TitleText.js';
import BodyText from './ui/BodyText.js';
import AlertButton from './ui/AlertButton.js';

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
          <TitleText 
            style={styles.textLeft}
            text={props.name}
          />
          <BodyText 
            style={styles.textLeft}
            text={`HEX: #${props.hex}`}
          />
          <BodyText 
            style={styles.textLeft}
            text={`RGB: #${props.rgb}`}
          />
          <AlertButton 
            title='Delete'
            onPress={props.onDeleteItem.bind(this, props.id)} 
          />
        </View>
      </View>

      {showText &&
        <View style={styles.card}>
          <BodyText 
            style={styles.textLeft}
            text={props.text}
          />
        </View>
      }
    </View>
  );
};

export default ColorCard;