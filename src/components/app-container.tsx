import * as React from 'react';

import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

interface Props {
  children: React.ReactNode;
}

export default function AppContainer(props: Props) {
  return (
    <NavigationContainer>
      <NativeBaseProvider>{props.children}</NativeBaseProvider>
    </NavigationContainer>
  );
}
