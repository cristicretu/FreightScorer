import 'react-native-gesture-handler';

import AppContainer from './src/components/app-container';
import MainScreen from './src/screens/main-screen';
import Navigator from './src/';

export default function App() {
  return (
    <AppContainer>
      <Navigator />
      {/* <MainScreen /> */}
    </AppContainer>
  );
}
