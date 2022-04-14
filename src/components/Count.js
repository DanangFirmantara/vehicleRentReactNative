import React from 'react';
import { Box, Button, Text } from 'native-base';

const Count = () => {
   return (
      <Box
         justifyContent={'flex-end'}
         flexDirection="row"
         alignItems={'center'}>
         <Button borderRadius={200} bg="rgba(255, 205, 97, 0.54)">
            <Text fontSize={17} fontWeight={'bold'}>
               -
            </Text>
         </Button>
         <Text marginX={5} fontSize={17} fontWeight={'bold'}>
            1
         </Text>
         <Button borderRadius={200} bg="rgba(255, 205, 97, 1)">
            <Text fontSize={17} fontWeight={'bold'}>
               +
            </Text>
         </Button>
      </Box>
   );
};

export default Count;
