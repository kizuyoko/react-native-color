import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import styles from './styles.js';
import MainNavigator from './screens/MainNavigator.js';
import TitleText from './components/ui/TitleText.js';
import BodyText from './components/ui/BodyText.js';
import PrimaryButton from './components/ui/PrimarylButton.js';

const WelcomeScreen = (props) => {
  return (
    <View style={styles.layout}>
      <TitleText text="Welcome!" />
      <BodyText text="I am glad you're here. Explore, enjoy!!" />
      <PrimaryButton 
        onPress={() => props.navigation.navigate('Main')}
        title="Go to Main Page"
      />
    </View>  
  );    
};

const Stack = createStackNavigator();

// --- App ---
const App = () => (
  <NavigationContainer>
    <Stack.Navigator 
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Welcome' component={WelcomeScreen} />
      <Stack.Screen name='Main' component={MainNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;


