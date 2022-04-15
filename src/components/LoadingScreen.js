import React from 'react';
import { Spinner, Center, Text } from 'native-base';

const LoadingScreen = ({ title }) => {
   return (
      <Center
         zIndex={1}
         position={'absolute'}
         w={'full'}
         height={'full'}
         flex={1}
         bg={'rgba(255, 255, 255, 0.8)'}>
         <Center>
            <Spinner
               accessibilityLabel="Loading posts"
               color="rgba(57, 57, 57, 1)"
               size="lg"
               mb={4}
            />
            <Text fontSize={20} fontWeight={'bold'} color="rgba(57, 57, 57, 1)">
               {title || 'Please Wait . . .'}
            </Text>
         </Center>
      </Center>
   );
};

export default LoadingScreen;
