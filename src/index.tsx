import 'react-native-gesture-handler';

import MainScreen from './screens/main-screen';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{
        drawerType: 'back',
        headerStyle: {
          backgroundColor: '#fa0304'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
    >
      <Drawer.Screen name="Esentza | FTC Scorer" component={MainScreen} />
    </Drawer.Navigator>
  );
};

export default App;
