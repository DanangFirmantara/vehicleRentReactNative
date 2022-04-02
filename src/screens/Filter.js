import {Box, Button, HStack, Input, Switch, Text} from 'native-base';
import React from 'react';
import Container from '../components/Container';
import Icon from 'react-native-vector-icons/Entypo';

const Filter = () => {
   const input = [
      {
         name: 'location',
         title: 'Your Location',
      },
      {
         name: 'rating',
         title: 'Start Rating',
      },
      {
         name: 'price',
         title: 'Price',
      },
      {
         name: 'date',
         title: 'Date',
      },
      {
         name: 'type',
         title: 'Type',
      },
      {
         name: 'isPrepayment',
         title: 'No Prepayment',
      },
      {
         name: 'deals',
         title: 'Deals',
      },
      {
         name: 'isAvailable',
         title: 'Only Show Available',
      },
   ];
   return (
      <Container>
         {input.map(item => {
            return (
               <HStack alignItems={'center'} key={item.name}>
                  <Text flex={1}>{item.title}</Text>
                  {item.name !== 'isPrepayment' &&
                     item.name !== 'deals' &&
                     item.name !== 'isAvailable' && (
                        <>
                           <Input
                              placeholder={item.name}
                              variant="outlined"
                              fontSize={17}
                           />
                           <Icon name={'chevron-right'} size={23} />
                        </>
                     )}
                  {item.name === 'isPrepayment' && (
                     <>
                        <Switch
                           offTrackColor="orange.100"
                           onTrackColor="orange.200"
                           onThumbColor="orange.500"
                           offThumbColor="orange.50"
                           size={'lg'}
                           mr={2}
                        />
                     </>
                  )}
                  {item.name === 'deals' && (
                     <>
                        <Switch
                           offTrackColor="orange.100"
                           onTrackColor="orange.200"
                           onThumbColor="orange.500"
                           offThumbColor="orange.50"
                           size={'lg'}
                           mr={2}
                        />
                     </>
                  )}
                  {item.name === 'isAvailable' && (
                     <>
                        <Switch
                           offTrackColor="orange.100"
                           onTrackColor="orange.200"
                           onThumbColor="orange.500"
                           offThumbColor="orange.50"
                           size={'lg'}
                           mr={2}
                        />
                     </>
                  )}
               </HStack>
            );
         })}
         <Box flex={1} />
         <Button
            my={4}
            height={50}
            bg={'rgba(255, 205, 97, 1)'}
            color={'rgba(57, 57, 57, 1)'}
            fontWeight="bold"
            fontSize={18}
            borderRadius={10}>
            Apply
         </Button>
      </Container>
   );
};

export default Filter;
