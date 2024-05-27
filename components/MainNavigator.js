import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListScreen from './ListScreen.js';
import HomeScreen from './HomeScreen.js';
import AddNewScreen from './AddNewScreen.js'
const Tab = createBottomTabNavigator(); 

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='List' component={ListScreen} />
      <Tab.Screen name='Add New' component={AddNewScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;