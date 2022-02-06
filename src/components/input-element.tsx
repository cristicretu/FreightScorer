import { Box, Center, Input, Text, useColorModeValue } from 'native-base';

import React from 'react';

interface InputElementProps {
  children: React.ReactNode;
  text: string;
}

export default function InputElement({ text, children }: InputElementProps) {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      flexDir={'row'}
      bg={useColorModeValue('gray.100', 'gray.800')}
      padding={2}
      alignItems={'center'}
    >
      <Text>{text}</Text>
      {children}
    </Box>
  );
}
