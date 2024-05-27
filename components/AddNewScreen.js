import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import styles from "../styles";
import colors from '../data/colors';

const AddNewScreen = (props) => {
  const onSubmit = () => {
    const newColor = {
      name: 'Orange',
      hex: 'FFA500',
      rgb: '255, 165, 0',
      text: 'Oh, I have not made this text...'
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
        value=''
      />
      <TextInput
        style={inputStyles.input} 
        placeholder='HEX'
        value=''
      />
      <TextInput
        style={inputStyles.input} 
        placeholder='RGB'
        value=''
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

