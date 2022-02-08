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
  const [bonusOne, setBonusOne] = React.useState<'none' | 'duck' | 'team'>(
    'none'
  );
  const [bonusTwo, setBonusTwo] = React.useState<'none' | 'duck' | 'team'>(
    'none'
  );

  const [teleStorageFreight, setTeleStorageFreight] = React.useState(0);
  const [teleFreightOne, setTeleFreightOne] = React.useState(0);
  const [teleFreightTwo, setTeleFreightTwo] = React.useState(0);
  const [teleFreightThree, setTeleFreightThree] = React.useState(0);
  const [sharedFreight, setSharedFreight] = React.useState(0);

  const [carousel, setCarousel] = React.useState(0);
  const [balancedAlHub, setBalancedAlHub] = React.useState(false);
  const [unbalancedShHub, setUnbalancedShHub] = React.useState(false);
  const [enParkingOne, setEnParkingOne] = React.useState<
    'none' | 'partially' | 'fully'
  >('none');
  const [enParkingTwo, setEnParkingTwo] = React.useState<
    'none' | 'partially' | 'fully'
  >('none');
  const [capped, setCapped] = React.useState<'none' | 'one' | 'two'>('none');

  const handleBonusChange = (bonus: 'none' | 'duck' | 'team', nr: 1 | 2) => {
    const currentState = nr === 1 ? bonusOne : bonusTwo;
    if (currentState === bonus) return;

    if (currentState === 'none') {
      if (bonus === 'duck') {
        if (nr === 1) {
          setBonusOne('duck');
        } else {
          setBonusTwo('duck');
        }
        setAutonomousScore(autonomousScore + 10);
      } else if (bonus === 'team') {
        if (nr === 1) {
          setBonusOne('team');
        } else {
          setBonusTwo('team');
        }
        setAutonomousScore(autonomousScore + 20);
      }
    } else if (currentState === 'duck') {
      if (bonus === 'none') {
        if (nr === 1) {
          setBonusOne('none');
        } else {
          setBonusTwo('none');
        }
        setAutonomousScore(autonomousScore - 10);
      } else if (bonus === 'team') {
        if (nr === 1) {
          setBonusOne('team');
        } else {
          setBonusTwo('team');
        }
        setAutonomousScore(autonomousScore + 10);
      }
    } else if (currentState === 'team') {
      if (bonus === 'none') {
        if (nr === 1) {
          setBonusOne('none');
        } else {
          setBonusTwo('none');
        }
        setAutonomousScore(autonomousScore - 20);
      } else if (bonus === 'duck') {
        if (nr === 1) {
          setBonusOne('duck');
        } else {
          setBonusTwo('duck');
        }
        setAutonomousScore(autonomousScore - 10);
      }
    }
  };

  const handleParkingChange = (
    value: 'none' | 'storage' | 'warehouse',
    nr: 1 | 2
  ) => {
    const currentState = nr === 1 ? parkingOne : parkingTwo;
    if (currentState === value) {
      return;
    }

    const isPartial: number =
      nr === 1
        ? statusOne === 'partially'
          ? 1
          : 0
        : statusTwo === 'partially'
        ? 1
        : 0;
    const isFull =
      nr === 1
        ? statusOne === 'fully'
          ? 2
          : 0
        : statusTwo === 'fully'
        ? 2
        : 0;

    if (currentState === 'none') {
      if (value === 'storage') {
        if (nr === 1) setParkingOne('storage');
        else setParkingTwo('storage');
        setAutonomousScore(autonomousScore + 3 * isPartial + 3 * isFull);
      } else if (value === 'warehouse') {
        if (nr === 1) setParkingOne('warehouse');
        else setParkingTwo('warehouse');
        setAutonomousScore(autonomousScore + 5 * isPartial + 5 * isFull);
      }
    }

    if (currentState === 'storage') {
      if (value === 'none') {
        if (nr === 1) setParkingOne('none');
        else setParkingTwo('none');
        setAutonomousScore(autonomousScore - 3 * isPartial - 3 * isFull);
      } else if (value === 'warehouse') {
        if (nr === 1) setParkingOne('warehouse');
        else setParkingTwo('warehouse');
        setAutonomousScore(autonomousScore + 2 * isPartial + 2 * isFull);
      }
    }

    if (currentState === 'warehouse') {
      if (value === 'none') {
        if (nr === 1) setParkingOne('none');
        else setParkingTwo('none');
        setAutonomousScore(autonomousScore - 5 * isPartial - 5 * isFull);
      } else if (value === 'storage') {
        if (nr === 1) setParkingOne('storage');
        else setParkingTwo('storage');
        setAutonomousScore(autonomousScore - 2 * isPartial - 2 * isFull);
      }
    }
  };

  React.useEffect(() => {
    if (statusOne === 'partially') {
      if (parkingOne === 'storage') {
        setAutonomousScore(autonomousScore - 3);
      } else if (parkingOne === 'warehouse') {
        setAutonomousScore(autonomousScore - 5);
      }
    } else if (statusOne === 'fully') {
      if (parkingOne === 'storage') {
        setAutonomousScore(autonomousScore + 3);
      } else if (parkingOne === 'warehouse') {
        setAutonomousScore(autonomousScore + 5);
      }
    }
  }, [statusOne]);

  React.useEffect(() => {
    if (statusTwo === 'partially') {
      if (parkingTwo === 'storage') {
        setAutonomousScore(autonomousScore - 3);
      } else if (parkingTwo === 'warehouse') {
        setAutonomousScore(autonomousScore - 5);
      }
    } else if (statusTwo === 'fully') {
      if (parkingTwo === 'storage') {
        setAutonomousScore(autonomousScore + 3);
      } else if (parkingTwo === 'warehouse') {
        setAutonomousScore(autonomousScore + 5);
      }
    }
  }, [statusTwo]);

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
              <Switch
                onTrackColor={'red.600'}
                onThumbColor={'red.600'}
                onValueChange={() => {
                  if (duckDelivered === false) {
                    setDuckDelivered(true);
                    setAutonomousScore(autonomousScore + 10);
                  } else {
                    setDuckDelivered(false);
                    setAutonomousScore(autonomousScore - 10);
                  }
                }}
              ></Switch>
            </InputElement>
            <InputElement text="Storage Freight">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Text marginRight={'2'}>{autoStorageFreight}</Text>
                <Button
                  backgroundColor={'red.700'}
                  marginRight={'2'}
                  _pressed={{ backgroundColor: 'red.600' }}
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
                  _pressed={{ backgroundColor: 'red.600' }}
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
                  _pressed={{ backgroundColor: 'red.600' }}
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
                  _pressed={{ backgroundColor: 'red.600' }}
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
                  _pressed={{ backgroundColor: 'red.600' }}
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
                  _pressed={{ backgroundColor: 'red.600' }}
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
                  _pressed={{ backgroundColor: 'red.600' }}
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
                  _pressed={{ backgroundColor: 'red.600' }}
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
                  _pressed={{ backgroundColor: 'red.600' }}
                  backgroundColor={
                    parkingOne === 'none' ? 'red.500' : 'red.700'
                  }
                  onPress={() => handleParkingChange('none', 1)}
                >
                  None
                </Button>
                <Button
                  marginRight={'2'}
                  _pressed={{ backgroundColor: 'red.600' }}
                  backgroundColor={
                    parkingOne === 'storage' ? 'red.500' : 'red.700'
                  }
                  onPress={() => {
                    handleParkingChange('storage', 1);
                  }}
                >
                  Storage
                </Button>
                <Button
                  backgroundColor={
                    parkingOne === 'warehouse' ? 'red.500' : 'red.700'
                  }
                  _pressed={{ backgroundColor: 'red.600' }}
                  onPress={() => {
                    handleParkingChange('warehouse', 1);
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
                  _pressed={{ backgroundColor: 'red.600' }}
                  backgroundColor={
                    statusOne === 'partially' && parkingOne !== 'none'
                      ? 'red.500'
                      : 'red.700'
                  }
                  onPress={() => {
                    if (parkingOne !== 'none') {
                      setStatusOne('partially');
                    }
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
                  _pressed={{ backgroundColor: 'red.600' }}
                  onPress={() => {
                    if (parkingOne !== 'none') setStatusOne('fully');
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
                  _pressed={{ backgroundColor: 'red.600' }}
                  onPress={() => {
                    handleParkingChange('none', 2);
                  }}
                >
                  None
                </Button>
                <Button
                  marginRight={'2'}
                  backgroundColor={
                    parkingTwo === 'storage' ? 'red.500' : 'red.700'
                  }
                  _pressed={{ backgroundColor: 'red.600' }}
                  onPress={() => {
                    handleParkingChange('storage', 2);
                  }}
                >
                  Storage
                </Button>
                <Button
                  backgroundColor={
                    parkingTwo === 'warehouse' ? 'red.500' : 'red.700'
                  }
                  onPress={() => {
                    handleParkingChange('warehouse', 2);
                  }}
                  _pressed={{ backgroundColor: 'red.600' }}
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
                  _pressed={{ backgroundColor: 'red.600' }}
                  onPress={() => {
                    if (parkingTwo !== 'none') {
                      setStatusTwo('partially');
                    }
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
                  _pressed={{ backgroundColor: 'red.600' }}
                  onPress={() => {
                    if (parkingTwo !== 'none') setStatusTwo('fully');
                  }}
                >
                  Full
                </Button>
              </Box>
            </InputElement>
            <InputElement text="Bonus">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Button
                  marginRight={'2'}
                  backgroundColor={bonusOne === 'none' ? 'red.500' : 'red.700'}
                  _pressed={{ backgroundColor: 'red.600' }}
                  onPress={() => {
                    handleBonusChange('none', 1);
                  }}
                >
                  None
                </Button>
                <Button
                  marginRight={'2'}
                  backgroundColor={bonusOne === 'duck' ? 'red.500' : 'red.700'}
                  _pressed={{ backgroundColor: 'red.600' }}
                  onPress={() => {
                    handleBonusChange('duck', 1);
                  }}
                >
                  Duck
                </Button>
                <Button
                  backgroundColor={bonusOne === 'team' ? 'red.500' : 'red.700'}
                  onPress={() => {
                    handleBonusChange('team', 1);
                  }}
                  _pressed={{ backgroundColor: 'red.600' }}
                >
                  Team
                </Button>
              </Box>
            </InputElement>
            <InputElement text="Bonus">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Button
                  marginRight={'2'}
                  backgroundColor={bonusTwo === 'none' ? 'red.500' : 'red.700'}
                  _pressed={{ backgroundColor: 'red.600' }}
                  onPress={() => {
                    handleBonusChange('none', 2);
                  }}
                >
                  None
                </Button>
                <Button
                  marginRight={'2'}
                  backgroundColor={bonusTwo === 'duck' ? 'red.500' : 'red.700'}
                  _pressed={{ backgroundColor: 'red.600' }}
                  onPress={() => {
                    handleBonusChange('duck', 2);
                  }}
                >
                  Duck
                </Button>
                <Button
                  backgroundColor={bonusTwo === 'team' ? 'red.500' : 'red.700'}
                  onPress={() => {
                    handleBonusChange('team', 2);
                  }}
                  _pressed={{ backgroundColor: 'red.600' }}
                >
                  Team
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
                  _pressed={{ backgroundColor: 'red.600' }}
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
                  _pressed={{ backgroundColor: 'red.600' }}
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
                  _pressed={{ backgroundColor: 'red.600' }}
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
                  _pressed={{ backgroundColor: 'red.600' }}
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
                  _pressed={{ backgroundColor: 'red.600' }}
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
                  _pressed={{ backgroundColor: 'red.600' }}
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
                  _pressed={{ backgroundColor: 'red.600' }}
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
                  _pressed={{ backgroundColor: 'red.600' }}
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
                  _pressed={{ backgroundColor: 'red.600' }}
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
                  _pressed={{ backgroundColor: 'red.600' }}
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
                <Text marginRight={'2'}>{carousel}</Text>
                <Button
                  marginRight={'2'}
                  backgroundColor={'red.700'}
                  _pressed={{ backgroundColor: 'red.600' }}
                  onPress={() => {
                    setCarousel(carousel === 0 ? 0 : carousel - 1);
                    setEndgameScore(
                      carousel === 0 ? endgameScore : endgameScore - 6
                    );
                  }}
                >
                  <AntDesign name="minus" size={18} color="white" />
                </Button>
                <Button
                  backgroundColor={'red.700'}
                  _pressed={{ backgroundColor: 'red.600' }}
                  onPress={() => {
                    setCarousel(carousel + 1);
                    setEndgameScore(endgameScore + 6);
                  }}
                >
                  <AntDesign name="minus" size={18} color="white" />
                </Button>
              </Box>
            </InputElement>
            <InputElement text="Balanced Alliance Hub?">
              <Switch
                onTrackColor={'red.600'}
                onThumbColor={'red.600'}
                onValueChange={() => {
                  if (balancedAlHub === false) {
                    setBalancedAlHub(true);
                    setEndgameScore(endgameScore + 10);
                  } else {
                    setBalancedAlHub(false);
                    setEndgameScore(endgameScore - 10);
                  }
                }}
              ></Switch>
            </InputElement>
            <InputElement text="Unbalanced Shared Hub?">
              <Switch
                onTrackColor={'red.600'}
                onThumbColor={'red.600'}
                onValueChange={() => {
                  if (unbalancedShHub === false) {
                    setUnbalancedShHub(true);
                    setEndgameScore(endgameScore + 10);
                  } else {
                    setUnbalancedShHub(false);
                    setEndgameScore(endgameScore - 10);
                  }
                }}
              ></Switch>
            </InputElement>
            <InputElement text="Parked 1">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Button
                  marginRight={'2'}
                  backgroundColor={
                    enParkingOne === 'none' ? 'red.500' : 'red.700'
                  }
                  onPress={() => {
                    // handleBonusChange('team', 1);
                  }}
                  _pressed={{ backgroundColor: 'red.600' }}
                >
                  None
                </Button>
                <Button
                  marginRight={'2'}
                  backgroundColor={
                    enParkingOne === 'partially' ? 'red.500' : 'red.700'
                  }
                  onPress={() => {
                    // handleBonusChange('team', 1);
                  }}
                  _pressed={{ backgroundColor: 'red.600' }}
                >
                  Partially
                </Button>
                <Button
                  backgroundColor={
                    enParkingOne === 'fully' ? 'red.500' : 'red.700'
                  }
                  onPress={() => {
                    // handleBonusChange('team', 1);
                  }}
                  _pressed={{ backgroundColor: 'red.600' }}
                >
                  Fully
                </Button>
              </Box>
            </InputElement>
            <InputElement text="Parked 2">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Button
                  marginRight={'2'}
                  backgroundColor={
                    enParkingTwo === 'none' ? 'red.500' : 'red.700'
                  }
                  onPress={() => {
                    // handleBonusChange('team', 1);
                  }}
                  _pressed={{ backgroundColor: 'red.600' }}
                >
                  None
                </Button>
                <Button
                  marginRight={'2'}
                  backgroundColor={
                    enParkingTwo === 'partially' ? 'red.500' : 'red.700'
                  }
                  onPress={() => {
                    handleBonusChange('team', 1);
                  }}
                  _pressed={{ backgroundColor: 'red.600' }}
                >
                  Partially
                </Button>
                <Button
                  backgroundColor={
                    enParkingTwo === 'fully' ? 'red.500' : 'red.700'
                  }
                  onPress={() => {
                    handleBonusChange('team', 1);
                  }}
                  _pressed={{ backgroundColor: 'red.600' }}
                >
                  Fully
                </Button>
              </Box>
            </InputElement>
            <InputElement text="Capped Elements">
              <Box display={'flex'} flexDir={'row'} alignItems={'center'}>
                <Button
                  marginRight={'2'}
                  backgroundColor={capped === 'none' ? 'red.500' : 'red.700'}
                  onPress={() => {
                    // handleBonusChange('team', 1);
                  }}
                  _pressed={{ backgroundColor: 'red.600' }}
                >
                  None
                </Button>
                <Button
                  marginRight={'2'}
                  backgroundColor={capped === 'one' ? 'red.500' : 'red.700'}
                  onPress={() => {
                    // handleBonusChange('team', 1);
                  }}
                  _pressed={{ backgroundColor: 'red.600' }}
                >
                  One
                </Button>
                <Button
                  backgroundColor={capped === 'two' ? 'red.500' : 'red.700'}
                  onPress={() => {
                    // handleBonusChange('team', 1);
                  }}
                  _pressed={{ backgroundColor: 'red.600' }}
                >
                  Two
                </Button>
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
