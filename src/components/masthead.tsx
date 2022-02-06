import { Box, Heading, Image, VStack } from 'native-base';

import { ImageSourcePropType } from 'react-native';
import React from 'react';

interface Props {
  image: ImageSourcePropType;
  children: React.ReactNode;
}

const Masthead = ({ image, children }: Props) => {
  return (
    <VStack h="300px" pb={5}>
      <Image
        position={'absolute'}
        left={0}
        right={0}
        bottom={0}
        w="full"
        h="300px"
        resizeMode="cover"
        source={image}
        alt="masthead image"
      />
      {children}
    </VStack>
  );
};

export default Masthead;
