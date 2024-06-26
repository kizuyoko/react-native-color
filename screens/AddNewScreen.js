import { View, Button, StyleSheet, TextInput, Alert } from 'react-native';
import styles from "../styles";
import colors from '../data/colors';
import { useState } from 'react';
import TitleText from '../components/ui/TitleText.js';
import AlertButton from '../components/ui/AlertButton.js';
import PrimaryButton from '../components/ui/PrimarylButton.js';

const AddNewScreen = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredHex, setEnteredHex] = useState('');
  const [enteredText, setEnteredText] = useState('');
  
  let newColor = {};

  const nameChangeHandler = event => {
    setEnteredName(event.nativeEvent.text); 
  };

  const hexChangeHandler = event => {
    setEnteredHex(event.nativeEvent.text); 
  };

  const textChangeHandler = event => {
    setEnteredText(event.nativeEvent.text);  
  };

  const hexToRgb = hex => {
    // Remove any leading #
    hex = hex.replace(/^#/, '');
  
    // Parse the hex string into RGB components
    let r, g, b;
    if (hex.length === 3) {
      r = parseInt(hex[0] + hex[0], 16);
      g = parseInt(hex[1] + hex[1], 16);
      b = parseInt(hex[2] + hex[2], 16);
    } else if (hex.length === 6) {
      r = parseInt(hex.substring(0, 2), 16);
      g = parseInt(hex.substring(2, 4), 16);
      b = parseInt(hex.substring(4, 6), 16);
    } else {
      return ''; // Return empty if invalid hex length
    }
  
    return `${r}, ${g}, ${b}`;
  };

  const clearNewColor = () => {
    setEnteredName('');
    setEnteredHex('');
    setEnteredText('');
  };

  const onSubmit = () => {
    if (enteredName.length < 1) {
      Alert.alert(
        'Name missing!',
        'You need to enter a name.',
        [{ 
          text: 'OK', 
          style: 'destructive', 
        }]
       );
      return;
    }

    const hexPattern = /^([0-9A-F]{3}([0-9A-F]{3})?)$/i;
    if (!hexPattern.test(enteredHex)) {
      Alert.alert(
        'Invalid HEX Code!',
        'Please enter a valid HEX code without #',
        [{
          text: 'OK',
          style: 'destructive',
        }]
      );
      return;
    }

    const rgbValue = hexToRgb(enteredHex);

    if (enteredText.length < 1) {
      Alert.alert(
        'Text missing!',
        'You need to enter a text.',
        [{ 
          text: 'OK', 
          style: 'destructive', 
        }]
       );
      return;
    }

    newColor = {
      name: enteredName,
      hex: enteredHex,
      rgb: rgbValue,
      text: enteredText
    }

    colors.unshift(newColor);

    clearNewColor();
    props.navigation.navigate('List');
  }

  return (
    <View style={styles.layout}>
      <TitleText text="Add New" style={listStyles.text} />
      <TextInput
        style={inputStyles.input} 
        placeholder='Name'
        value={enteredName}
        onChange={nameChangeHandler}
      />
      <TextInput
        style={inputStyles.input} 
        placeholder='HEX code without #'
        value={enteredHex}
        onChange={hexChangeHandler}
      />
      <TextInput
        style={inputStyles.input} 
        placeholder='Text'
        value={enteredText}
        onChange={textChangeHandler}
      />
      <AlertButton 
        title="Clear"
        onPress={clearNewColor}
        btnStyle={inputStyles.button}
      />
      <PrimaryButton 
        title="Add New"
        onPress={onSubmit}
        btnStyle={inputStyles.button}
      />
    </View>  

  );
};

const listStyles = StyleSheet.create({
  text: {
    textAlign: 'left'
  }
});

const inputStyles =  StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  button: {
    margin: 8,
    marginBottom: 0
  }
});

export default AddNewScreen;

