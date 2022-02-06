// import AboutScreen from './screens/about-screen';
// import MainScreen from './screens/main-screen';
import React from 'react';
// import Sidebar from './components/sidebar';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      // drawerContent={props => <Sidebar {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        overlayColor: '#00000000'
      }}
    >
      {/* <Drawer.Screen name="Main" component={MainScreen} /> */}
      {/* <Drawer.Screen name="About" component={AboutScreen} /> */}
    </Drawer.Navigator>
  );
};

export default App;
