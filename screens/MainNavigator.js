import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListScreen from './ListScreen.js';
import HomeScreen from './HomeScreen.js';
import AddNewScreen from './AddNewScreen.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faList, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator(); 

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = faHome;
          } else if (route.name === 'List') {
            iconName = faList;
          } else if (route.name === 'Add New') {
            iconName = faPlusSquare;
          }
          return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen 
        name='Home' 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name='List' 
        component={ListScreen} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name='Add New' 
        component={AddNewScreen}
        options={{ headerShown: false }}  
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;