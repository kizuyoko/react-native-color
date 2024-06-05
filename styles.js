import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    margin: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    margin: 8,
    marginTop: 0,
    fontSize: 14,
    textAlign: 'center',
  }, 
  card: {
    margin: 8,
    flexDirection: 'row',
  },
  colorIcon: {
    width: 100,
    height: 80,
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#ccc'
  },
  content: {
    paddingLeft: 20,
    flex: 4,
    justifyContent: 'center',
  },
  colorName: {
    margin: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  colorText: {
    margin: 16
  },
  buttonContainer: {
    margin: 8,
  },
  primaryButtonContainer: {
    margin: 8,
    backgroundColor: 'darkblue',
    padding: 8,
  },
  alertButtonContainer: {
    backgroundColor: 'darkred',
    padding: 8,
  },
  button: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  textLeft: {
    textAlign: 'left',
    margin: 0
  },
});

export default styles;