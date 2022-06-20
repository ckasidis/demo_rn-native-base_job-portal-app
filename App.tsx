/* eslint-disable */

import React from 'react';
import {NativeBaseProvider, Box, Center} from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Center h={'full'}>
        <Box>Hello world</Box>
      </Center>
    </NativeBaseProvider>
  );
}
