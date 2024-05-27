import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import styles from "../styles";
import colors from '../data/colors';
import { useState } from 'react';

const AddNewScreen = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredHex, setEnteredHex] = useState('');
  const [enteredRgb, setEnteredRgb] = useState('');
  const [enteredText, setEnteredText] = useState('');
  
  let newColor = {};

  const nameChangeHandler = event => {
    setEnteredName(event.target.value); 
  };

  const hexChangeHandler = event => {
    setEnteredHex(event.target.value); 
  };

  const rgbChangeHandler = event => {
    setEnteredRgb(event.target.value); 
  };

  const textChangeHandler = event => {
    setEnteredText(event.target.value); 
  };

  const onSubmit = () => {
    newColor = {
      name: enteredName,
      hex: enteredHex,
      rgb: enteredRgb,
      text: enteredText
    }

    colors.push(newColor);
    props.navigation.navigate('List');
  }

  return (
    <View style={[styles.layout, listStyles.layout]}>
      <Text style={[styles.title, listStyles.text]}>Add New</Text>
      <TextInput
        style={inputStyles.input} 
        placeholder='Name'
        value={enteredName}
        onChange={nameChangeHandler}
      />
      <TextInput
        style={inputStyles.input} 
        placeholder='HEX'
        value={enteredHex}
        onChange={hexChangeHandler}
      />
      <TextInput
        style={inputStyles.input} 
        placeholder='RGB'
        value={enteredRgb}
        onChange={rgbChangeHandler}
      />
      <TextInput
        style={inputStyles.input} 
        placeholder='Text'
        value={enteredText}
        onChange={textChangeHandler}
      />
      <Button
        style={inputStyles.button} 
        title="Submit"
        onPress={onSubmit}
      />
    </View>  

  );
};

const listStyles = StyleSheet.create({
  layout: {
    justifyContent: 'top'
  },
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
    margin:20
  }
});

export default AddNewScreen;

