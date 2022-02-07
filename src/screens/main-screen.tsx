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
  const [autoStorageFreight, setAutoStorageFreight] = React.useState(0);
  const [autoFreightOne, setAutoFreightOne] = React.useState(0);
  const [autoFreightTwo, setAutoFreightTwo] = React.useState(0);
  const [autoFreightThree, setAutoFreightThree] = React.useState(0);
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

  const [teleStorageFreight, setTeleStorageFreight] = React.useState(0);
  const [teleFreightOne, setTeleFreightOne] = React.useState(0);
  const [teleFreightTwo, setTeleFreightTwo] = React.useState(0);
  const [teleFreightThree, setTeleFreightThree] = React.useState(0);
  const [sharedFreight, setSharedFreight] = React.useState(0);

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
                <Text marginRight={'2'}>{autoStorageFreight}</Text>
                <Button
                  backgroundColor={'red.700'}
                  marginRight={'2'}
                  onPress={() => {
                    setAutoStorageFreight(
                      autoStorageFreight === 0 ? 0 : autoStorageFreight - 1
                    );
                    setAutonomousScore(
                      autoStorageFreight === 0
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
                    setAutoStorageFreight(autoStorageFreight + 1);
                    setAutonomousScore(autonomousScore + 2);
                  }}
                >
                  <AntDesign name="plus" size={18} color="white" />
                </Button>
              </Box>
            </InputElement>
            <InputElement text="Level 1 Freight">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>{autoFreightOne}</Text>
                <Button
                  backgroundColor={'red.700'}
                  marginRight={'2'}
                  onPress={() => {
                    setAutoFreightOne(
                      autoFreightOne === 0 ? 0 : autoFreightOne - 1
                    );
                    setAutonomousScore(
                      autoFreightOne === 0
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
                    setAutoFreightOne(autoFreightOne + 1);
                    setAutonomousScore(autonomousScore + 2);
                  }}
                >
                  <AntDesign name="plus" size={18} color="white" />
                </Button>
              </Box>
            </InputElement>
            <InputElement text="Level 2 Freight">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>{autoFreightTwo}</Text>
                <Button
                  backgroundColor={'red.700'}
                  marginRight={'2'}
                  onPress={() => {
                    setAutoFreightTwo(
                      autoFreightTwo === 0 ? 0 : autoFreightTwo - 1
                    );
                    setAutonomousScore(
                      autoFreightTwo === 0
                        ? autonomousScore
                        : autonomousScore - 4
                    );
                  }}
                >
                  <AntDesign name="minus" size={18} color="white" />
                </Button>
                <Button
                  backgroundColor={'red.700'}
                  onPress={() => {
                    setAutoFreightTwo(autoFreightTwo + 1);
                    setAutonomousScore(autonomousScore + 4);
                  }}
                >
                  <AntDesign name="plus" size={18} color="white" />
                </Button>
              </Box>
            </InputElement>
            <InputElement text="Level 3 Freight">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>{autoFreightThree}</Text>
                <Button
                  marginRight={'2'}
                  backgroundColor={'red.700'}
                  onPress={() => {
                    setAutoFreightThree(
                      autoFreightThree === 0 ? 0 : autoFreightThree - 1
                    );
                    setAutonomousScore(
                      autoFreightThree === 0
                        ? autonomousScore
                        : autonomousScore - 6
                    );
                  }}
                >
                  <AntDesign name="minus" size={18} color="white" />
                </Button>
                <Button
                  backgroundColor={'red.700'}
                  onPress={() => {
                    setAutoFreightThree(autoFreightThree + 1);
                    setAutonomousScore(autonomousScore + 6);
                  }}
                >
                  <AntDesign name="plus" size={18} color="white" />
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
            <InputElement text="Level 1 Freight">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>{teleFreightOne}</Text>
                <Button
                  marginRight={'2'}
                  backgroundColor={'red.700'}
                  onPress={() => {
                    setTeleFreightOne(
                      teleFreightOne === 0 ? 0 : teleFreightOne - 1
                    );
                    setTeleoperatedScore(
                      teleFreightOne === 0
                        ? teleoperatedScore
                        : teleoperatedScore - 6
                    );
                  }}
                >
                  <AntDesign name="minus" size={18} color="white" />
                </Button>
                <Button
                  backgroundColor={'red.700'}
                  onPress={() => {
                    setTeleFreightOne(teleFreightOne + 1);
                    setTeleoperatedScore(teleoperatedScore + 6);
                  }}
                >
                  <AntDesign name="plus" size={18} color="white" />
                </Button>
              </Box>
            </InputElement>
            <InputElement text="Level 2 Freight">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>{teleFreightTwo}</Text>
                <Button
                  marginRight={'2'}
                  backgroundColor={'red.700'}
                  onPress={() => {
                    setTeleFreightTwo(
                      teleFreightTwo === 0 ? 0 : teleFreightTwo - 1
                    );
                    setTeleoperatedScore(
                      teleFreightTwo === 0
                        ? teleoperatedScore
                        : teleoperatedScore - 6
                    );
                  }}
                >
                  <AntDesign name="minus" size={18} color="white" />
                </Button>
                <Button
                  backgroundColor={'red.700'}
                  onPress={() => {
                    setTeleFreightTwo(teleFreightTwo + 1);
                    setTeleoperatedScore(teleoperatedScore + 6);
                  }}
                >
                  <AntDesign name="plus" size={18} color="white" />
                </Button>
              </Box>
            </InputElement>
            <InputElement text="Level 3 Freight">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>{teleFreightThree}</Text>
                <Button
                  marginRight={'2'}
                  backgroundColor={'red.700'}
                  onPress={() => {
                    setTeleFreightThree(
                      teleFreightThree === 0 ? 0 : teleFreightThree - 1
                    );
                    setTeleoperatedScore(
                      teleFreightThree === 0
                        ? teleoperatedScore
                        : teleoperatedScore - 6
                    );
                  }}
                >
                  <AntDesign name="minus" size={18} color="white" />
                </Button>
                <Button
                  backgroundColor={'red.700'}
                  onPress={() => {
                    setTeleFreightThree(teleFreightThree + 1);
                    setTeleoperatedScore(teleoperatedScore + 6);
                  }}
                >
                  <AntDesign name="plus" size={18} color="white" />
                </Button>
              </Box>
            </InputElement>
            <InputElement text="Storage Freight">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>{teleStorageFreight}</Text>
                <Button
                  marginRight={'2'}
                  backgroundColor={'red.700'}
                  onPress={() => {
                    setTeleStorageFreight(
                      teleStorageFreight === 0 ? 0 : teleStorageFreight - 1
                    );
                    setTeleoperatedScore(
                      teleStorageFreight === 0
                        ? teleoperatedScore
                        : teleoperatedScore - 6
                    );
                  }}
                >
                  <AntDesign name="minus" size={18} color="white" />
                </Button>
                <Button
                  backgroundColor={'red.700'}
                  onPress={() => {
                    setTeleStorageFreight(teleStorageFreight + 1);
                    setTeleoperatedScore(teleoperatedScore + 6);
                  }}
                >
                  <AntDesign name="plus" size={18} color="white" />
                </Button>
              </Box>
            </InputElement>
            <InputElement text="Shared Freight">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>{sharedFreight}</Text>
                <Button
                  marginRight={'2'}
                  backgroundColor={'red.700'}
                  onPress={() => {
                    setSharedFreight(
                      sharedFreight === 0 ? 0 : sharedFreight - 1
                    );
                    setTeleoperatedScore(
                      sharedFreight === 0
                        ? teleoperatedScore
                        : teleoperatedScore - 6
                    );
                  }}
                >
                  <AntDesign name="minus" size={18} color="white" />
                </Button>
                <Button
                  backgroundColor={'red.700'}
                  onPress={() => {
                    setSharedFreight(sharedFreight + 1);
                    setTeleoperatedScore(teleoperatedScore + 6);
                  }}
                >
                  <AntDesign name="plus" size={18} color="white" />
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
