import * as React from 'react';

import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import theme from '../theme';

interface Props {
  children: React.ReactNode;
}

export default function AppContainer(props: Props) {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>{props.children}</NativeBaseProvider>
    </NavigationContainer>
  );
}
