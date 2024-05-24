import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CatalogScreen from './CatalogScreen.js';
import FeedScreen from './FeedScreen.js';
import HomeScreen from './HomeScreen.js';
const Tab = createBottomTabNavigator(); 

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Feed' component={FeedScreen} />
      <Tab.Screen name='Catalog' component={CatalogScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;