import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
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
  }
});

export default styles;