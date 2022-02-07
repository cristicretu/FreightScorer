import * as React from 'react';

import {
  Box,
  Button,
  Center,
  Input,
  ScrollView,
  Switch,
  Text,
  VStack
} from 'native-base';

import { AntDesign } from '@expo/vector-icons';
import InputElement from '../components/input-element';
import { Platform, useColorScheme } from 'react-native';
import Separator from '../components/separator';

export default function MainScreen() {
  const [autonomousScore, setAutonomousScore] = React.useState(0);
  const [teleoperatedScore, setTeleoperatedScore] = React.useState(0);
  const [endgameScore, setEndgameScore] = React.useState(0);

  const [totalScore, setTotalScore] = React.useState(0);

  const [duckDelivered, setDuckDelivered] = React.useState(false);
  const [storageFreight, setStorageFreight] = React.useState(0);
  const [freightOne, setFreightOne] = React.useState(0);
  const [freightTwo, setFreightTwo] = React.useState(0);
  const [freightThree, setFreightThree] = React.useState(0);
  const [parkingOne, setParkingOne] = React.useState<
    'none' | 'storage' | 'warehouse'
  >('none');
  const [parkingTwo, setParkingTwo] = React.useState<
    'none' | 'storage' | 'warehouse'
  >('none');
  const [statusOne, setStatusOne] = React.useState<
    'partially' | 'fully' | undefined
  >('partially');
  const [statusTwo, setStatusTwo] = React.useState<
    'partially' | 'fully' | undefined
  >('partially');

  React.useEffect(() => {}, [parkingOne, statusOne]);
  return (
    <Center _dark={{ bg: 'gray.900' }} _light={{ bg: 'gray.50' }} flex={1}>
      <Box width={'full'} height={'full'} padding={4}>
        <ScrollView
          showsVerticalScrollIndicator={Platform.OS !== 'web' ? false : true}
        >
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
              Autonomous: {autonomousScore}
            </Text>
            <Separator />
            <InputElement text="Duck delivered">
              <Switch></Switch>
            </InputElement>
            <InputElement text="Storage Freight">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>{storageFreight}</Text>
                <Button
                  backgroundColor={'red.700'}
                  marginRight={'2'}
                  onPress={() => {
                    setStorageFreight(
                      storageFreight === 0 ? 0 : storageFreight - 1
                    );
                    setAutonomousScore(
                      storageFreight === 0
                        ? autonomousScore
                        : autonomousScore - 2
                    );
                  }}
                >
                  <AntDesign name="minus" size={18} color="white" />
                </Button>
                <Button
                  backgroundColor={'red.700'}
                  onPress={() => {
                    setStorageFreight(storageFreight + 1);
                    setAutonomousScore(autonomousScore + 2);
                  }}
                >
                  <AntDesign name="plus" size={18} color="white" />
                </Button>
              </Box>
            </InputElement>
            <InputElement text="Level 1 Freight">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>{freightOne}</Text>
                <Button
                  backgroundColor={'red.700'}
                  marginRight={'2'}
                  onPress={() => {
                    setFreightOne(freightOne === 0 ? 0 : freightOne - 1);
                    setAutonomousScore(
                      freightOne === 0 ? autonomousScore : autonomousScore - 2
                    );
                  }}
                >
                  <AntDesign name="minus" size={18} color="white" />
                </Button>
                <Button
                  backgroundColor={'red.700'}
                  onPress={() => {
                    setFreightOne(freightOne + 1);
                    setAutonomousScore(autonomousScore + 2);
                  }}
                >
                  <AntDesign name="plus" size={18} color="white" />
                </Button>
              </Box>
            </InputElement>
            <InputElement text="Level 2 Freight">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>{freightTwo}</Text>
                <Button
                  backgroundColor={'red.700'}
                  marginRight={'2'}
                  onPress={() => {
                    setFreightTwo(freightTwo === 0 ? 0 : freightTwo - 1);
                    setAutonomousScore(
                      freightTwo === 0 ? autonomousScore : autonomousScore - 4
                    );
                  }}
                >
                  <AntDesign name="minus" size={18} color="white" />
                </Button>
                <Button
                  backgroundColor={'red.700'}
                  onPress={() => {
                    setFreightTwo(freightTwo + 1);
                    setAutonomousScore(autonomousScore + 4);
                  }}
                >
                  <AntDesign name="minus" size={18} color="white" />
                </Button>
              </Box>
            </InputElement>
            <InputElement text="Level 3 Freight">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>{freightThree}</Text>
                <Button
                  marginRight={'2'}
                  backgroundColor={'red.700'}
                  onPress={() => {
                    setFreightThree(freightThree === 0 ? 0 : freightThree - 1);
                    setAutonomousScore(
                      freightThree === 0 ? autonomousScore : autonomousScore - 6
                    );
                  }}
                >
                  <AntDesign name="minus" size={18} color="white" />
                </Button>
                <Button
                  backgroundColor={'red.700'}
                  onPress={() => {
                    setFreightThree(freightThree + 1);
                    setAutonomousScore(autonomousScore + 6);
                  }}
                >
                  <AntDesign name="minus" size={18} color="white" />
                </Button>
              </Box>
            </InputElement>
            <InputElement text="Parking in">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Button
                  marginRight={'2'}
                  backgroundColor={
                    parkingOne === 'none' ? 'red.500' : 'red.700'
                  }
                  onPress={() => {
                    setParkingOne('none');
                  }}
                >
                  None
                </Button>
                <Button
                  marginRight={'2'}
                  backgroundColor={
                    parkingOne === 'storage' ? 'red.500' : 'red.700'
                  }
                  onPress={() => {
                    setParkingOne('storage');
                  }}
                >
                  Storage
                </Button>
                <Button
                  backgroundColor={
                    parkingOne === 'warehouse' ? 'red.500' : 'red.700'
                  }
                  onPress={() => {
                    setParkingOne('warehouse');
                  }}
                >
                  Warehouse
                </Button>
              </Box>
            </InputElement>
            <InputElement text="Parking status">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Button
                  marginRight={'2'}
                  backgroundColor={
                    statusOne === 'partially' && parkingOne !== 'none'
                      ? 'red.500'
                      : 'red.700'
                  }
                  onPress={() => {
                    setStatusOne('partially');
                  }}
                >
                  Partially
                </Button>
                <Button
                  backgroundColor={
                    statusOne === 'fully' && parkingOne !== 'none'
                      ? 'red.500'
                      : 'red.700'
                  }
                  onPress={() => {
                    setStatusOne('fully');
                  }}
                >
                  Full
                </Button>
              </Box>
            </InputElement>
            <InputElement text="Parking in">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Button
                  marginRight={'2'}
                  backgroundColor={
                    parkingTwo === 'none' ? 'red.500' : 'red.700'
                  }
                  onPress={() => {
                    setParkingTwo('none');
                  }}
                >
                  None
                </Button>
                <Button
                  marginRight={'2'}
                  backgroundColor={
                    parkingTwo === 'storage' ? 'red.500' : 'red.700'
                  }
                  onPress={() => {
                    setParkingTwo('storage');
                  }}
                >
                  Storage
                </Button>
                <Button
                  backgroundColor={
                    parkingTwo === 'warehouse' ? 'red.500' : 'red.700'
                  }
                  onPress={() => {
                    setParkingTwo('warehouse');
                  }}
                >
                  Warehouse
                </Button>
              </Box>
            </InputElement>
            <InputElement text="Parking status">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Button
                  marginRight={'2'}
                  backgroundColor={
                    statusTwo === 'partially' && parkingTwo !== 'none'
                      ? 'red.500'
                      : 'red.700'
                  }
                  onPress={() => {
                    setStatusTwo('partially');
                  }}
                >
                  Partially
                </Button>
                <Button
                  backgroundColor={
                    statusTwo === 'fully' && parkingTwo !== 'none'
                      ? 'red.500'
                      : 'red.700'
                  }
                  onPress={() => {
                    setStatusTwo('fully');
                  }}
                >
                  Full
                </Button>
              </Box>
            </InputElement>

            <Text fontSize={'lg'} fontWeight={'semibold'} marginTop={4}>
              Teleoperated: {teleoperatedScore}
            </Text>
            <Separator />
            <InputElement text="Storage Freight">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>1</Text>
                <Button marginRight={'2'}>
                  <AntDesign name="minus" size={18} color="white" />
                </Button>
                <Button>
                  <AntDesign name="minus" size={18} color="white" />
                </Button>
              </Box>
            </InputElement>
            <InputElement text="Level 1 Freight">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>1</Text>
                <Button marginRight={'2'}>
                  <AntDesign name="minus" size={18} color="white" />
                </Button>
                <Button>
                  <AntDesign name="minus" size={18} color="white" />
                </Button>
              </Box>
            </InputElement>
            <InputElement text="Level 2 Freight">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>1</Text>
                <Button marginRight={'2'}>
                  <AntDesign name="minus" size={18} color="white" />
                </Button>
                <Button>
                  <AntDesign name="minus" size={18} color="white" />
                </Button>
              </Box>
            </InputElement>
            <InputElement text="Level 3 Freight">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>1</Text>
                <Button marginRight={'2'}>
                  <AntDesign name="minus" size={18} color="white" />
                </Button>
                <Button>
                  <AntDesign name="minus" size={18} color="white" />
                </Button>
              </Box>
            </InputElement>
            <InputElement text="Shared Freight">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>1</Text>
                <Button marginRight={'2'}>
                  <AntDesign name="minus" size={18} color="white" />
                </Button>
                <Button>
                  <AntDesign name="minus" size={18} color="white" />
                </Button>
              </Box>
            </InputElement>

            <Text fontSize={'lg'} fontWeight={'semibold'} marginTop={4}>
              End Game: {endgameScore}
            </Text>
            <Separator />
            <InputElement text="Carousel">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>1</Text>
                <Button marginRight={'2'}>
                  <AntDesign name="minus" size={18} color="white" />
                </Button>
                <Button>
                  <AntDesign name="minus" size={18} color="white" />
                </Button>
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
              Total score: {totalScore}
            </Text>
            <Separator />
            <InputElement text="Autonomous">{autonomousScore}</InputElement>
            <InputElement text="Teleoperated">{teleoperatedScore}</InputElement>
            <InputElement text="End game">{endgameScore}</InputElement>
            <InputElement text="Total">{totalScore}</InputElement>
          </VStack>
        </ScrollView>
      </Box>
    </Center>
  );
}
