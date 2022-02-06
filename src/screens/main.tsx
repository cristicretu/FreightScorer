import * as React from 'react';

import {
  Box,
  Button,
  Center,
  Input,
  Switch,
  Text,
  useColorModeValue
} from 'native-base';

import InputElement from '../components/input-element';
import Separator from '../components/separator';
import ThemeToggle from '../components/theme-toggle';

export default function MainScreen() {
  return (
    <Center _dark={{ bg: 'gray.900' }} _light={{ bg: 'gray.50' }} flex={1}>
      <Box width={'full'} padding={4}>
        <Text fontSize={'3xl'} fontWeight={'semibold'}>
          Match Scorer
        </Text>

        <Text fontSize={'lg'} fontWeight={'semibold'}>
          Match Information
        </Text>
        <Separator />
        <InputElement text="Team number">
          <Input placeholder="15965" maxWidth={'16'} type="number" />
        </InputElement>
        <InputElement text="Match number">
          <Input placeholder="1" maxWidth={'16'} type="number" />
        </InputElement>

        <Separator />
        <Text fontSize={'lg'} fontWeight={'semibold'}>
          Autonomous
        </Text>
        <InputElement text="Duck delivered">
          <Switch></Switch>
        </InputElement>

        <InputElement text="Storage Freight">
          <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
            <Text>1</Text>
            <Button>-</Button>
            <Button>+</Button>
          </Box>
        </InputElement>

        <ThemeToggle />
      </Box>
    </Center>
  );
}
