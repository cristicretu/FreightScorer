import 'react-native-gesture-handler';

import MainScreen from './screens/main-screen';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="Main" component={MainScreen} />
    </Drawer.Navigator>
  );
};

export default App;
