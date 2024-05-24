import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListScreen from './ListScreen.js';
import HomeScreen from './HomeScreen.js';
const Tab = createBottomTabNavigator(); 

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='List' component={ListScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;