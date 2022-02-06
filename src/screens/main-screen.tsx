import * as React from 'react';

import {
  Box,
  Button,
  Center,
  Input,
  ScrollView,
  Switch,
  Text,
  VStack,
  useColorModeValue
} from 'native-base';

import InputElement from '../components/input-element';
import Separator from '../components/separator';
import ThemeToggle from '../components/theme-toggle';

export default function MainScreen() {
  return (
    <Center _dark={{ bg: 'gray.900' }} _light={{ bg: 'gray.50' }} flex={1}>
      <Box width={'full'} padding={4}>
        <ScrollView>
          <VStack>
            <Text fontSize={'3xl'} fontWeight={'semibold'}>
              Match Scorer
            </Text>

            <Text fontSize={'lg'} fontWeight={'semibold'} marginTop={4}>
              Match Information
            </Text>
            <Separator />

            <InputElement text="Team number">
              <Input placeholder="15965" maxWidth={'16'} type="number" />
            </InputElement>
            <InputElement text="Match number">
              <Input placeholder="1" maxWidth={'16'} type="number" />
            </InputElement>

            <Text fontSize={'lg'} fontWeight={'semibold'} marginTop={4}>
              Autonomous
            </Text>
            <Separator />

            <InputElement text="Duck delivered">
              <Switch></Switch>
            </InputElement>
            <InputElement text="Storage Freight">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>1</Text>
                <Button marginRight={'2'}>-</Button>
                <Button>+</Button>
              </Box>
            </InputElement>
            <InputElement text="Level 1 Freight">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>1</Text>
                <Button marginRight={'2'}>-</Button>
                <Button>+</Button>
              </Box>
            </InputElement>
            <InputElement text="Level 2 Freight">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>1</Text>
                <Button marginRight={'2'}>-</Button>
                <Button>+</Button>
              </Box>
            </InputElement>
            <InputElement text="Level 3 Freight">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>1</Text>
                <Button marginRight={'2'}>-</Button>
                <Button>+</Button>
              </Box>
            </InputElement>
            <InputElement text="Parking in">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Button marginRight={'2'}>None</Button>
                <Button marginRight={'2'}>Storage</Button>
                <Button>Warehouse</Button>
              </Box>
            </InputElement>
            <InputElement text="Parking status">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Button marginRight={'2'}>Partially</Button>
                <Button>Full</Button>
              </Box>
            </InputElement>
            <InputElement text="Parking in">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Button marginRight={'2'}>None</Button>
                <Button marginRight={'2'}>Storage</Button>
                <Button>Warehouse</Button>
              </Box>
            </InputElement>
            <InputElement text="Parking status">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Button marginRight={'2'}>Partially</Button>
                <Button>Full</Button>
              </Box>
            </InputElement>

            <Text fontSize={'lg'} fontWeight={'semibold'} marginTop={4}>
              Teleoperated
            </Text>
            <Separator />

            <InputElement text="Storage Freight">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>1</Text>
                <Button marginRight={'2'}>-</Button>
                <Button>+</Button>
              </Box>
            </InputElement>
            <InputElement text="Level 1 Freight">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>1</Text>
                <Button marginRight={'2'}>-</Button>
                <Button>+</Button>
              </Box>
            </InputElement>
            <InputElement text="Level 2 Freight">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>1</Text>
                <Button marginRight={'2'}>-</Button>
                <Button>+</Button>
              </Box>
            </InputElement>
            <InputElement text="Level 3 Freight">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>1</Text>
                <Button marginRight={'2'}>-</Button>
                <Button>+</Button>
              </Box>
            </InputElement>
            <InputElement text="Shared Freight">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>1</Text>
                <Button marginRight={'2'}>-</Button>
                <Button>+</Button>
              </Box>
            </InputElement>

            <Text fontSize={'lg'} fontWeight={'semibold'} marginTop={4}>
              End Game
            </Text>
            <Separator />

            <InputElement text="Carousel">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>1</Text>
                <Button marginRight={'2'}>-</Button>
                <Button>+</Button>
              </Box>
            </InputElement>
            <InputElement text="Balanced Alliance Hub?">
              <Switch></Switch>
            </InputElement>
            <InputElement text="Unbalanced Shared Hub?">
              <Switch></Switch>
            </InputElement>
            <InputElement text="Parked 1">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Button marginRight={'2'}>None</Button>
                <Button marginRight={'2'}>Partially</Button>
                <Button>Fully</Button>
              </Box>
            </InputElement>
            <InputElement text="Parked 2">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Button marginRight={'2'}>None</Button>
                <Button marginRight={'2'}>Partially</Button>
                <Button>Fully</Button>
              </Box>
            </InputElement>
            <InputElement text="Capped Elements">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Button marginRight={'2'}>None</Button>
                <Button marginRight={'2'}>One</Button>
                <Button>Two</Button>
              </Box>
            </InputElement>

            <Text fontSize={'lg'} fontWeight={'semibold'} marginTop={4}>
              Total score
            </Text>
            <Separator />
            <InputElement text="Autonomous">10</InputElement>
            <InputElement text="Teleoperated">20</InputElement>
            <InputElement text="End game">30</InputElement>
            <InputElement text="Total">60</InputElement>

            <ThemeToggle />
          </VStack>
        </ScrollView>
      </Box>
    </Center>
  );
}
