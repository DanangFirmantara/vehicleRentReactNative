import React from 'react';
import Container from '../components/Container';
import {Pressable, Box, Center, Input, Text, HStack} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonForm from '../components/ButtonForm';
import Count from '../components/Count';

const AddNewItem = () => {
  return (
    <Container>
      <Center flex={1}>
        <Pressable>
          {({isHovered, isFocused, isPressed}) => {
            return (
              <Box
                bg={
                  isPressed
                    ? 'coolGray.200'
                    : isHovered
                    ? 'coolGray.200'
                    : 'rgba(186, 186, 186, 0.35)'
                }
                width={100}
                height={100}
                borderRadius={50}>
                <Center flex={1}>
                  <Icon name="camera" size={50} />
                </Center>
              </Box>
            );
          }}
        </Pressable>
      </Center>
      <ButtonForm color="rgba(57, 57, 57, 1)" textColor="rgba(255, 205, 97, 1)">
        Add Pictures
      </ButtonForm>
      <Center>
        <Input
          placeholder="Type product name min 30 characters"
          width={'75%'}
          variant="underlined"
          marginBottom={4}
          textAlign="center"
          borderBottomColor={'rgba(196, 196, 196, 1)'}
        />
        <Input
          placeholder="Type product price"
          width={'75%'}
          variant="underlined"
          marginBottom={4}
          textAlign="center"
          borderBottomColor={'rgba(196, 196, 196, 1)'}
        />
      </Center>
      <Text fontWeight={'bold'} fontSize={17}>
        Desription
      </Text>
      <Input
        placeholder="Describe your product min 50 characters"
        variant="underlined"
        marginBottom={4}
        borderBottomColor={'rgba(196, 196, 196, 1)'}
      />
      <Text fontWeight={'bold'} fontSize={17}>
        Location
      </Text>
      <Input
        placeholder="Select Location"
        variant="outline"
        marginBottom={4}
        borderColor={'rgba(196, 196, 196, 1)'}
      />
      <Text fontWeight={'bold'} fontSize={17}>
        Add To
      </Text>
      <Input
        placeholder="Select Category"
        variant="outline"
        marginBottom={4}
        borderColor={'rgba(196, 196, 196, 1)'}
      />
      <HStack alignItems={'center'} justifyContent="center">
        <Text fontWeight={'bold'} fontSize={17} flex={1}>
          Stock :
        </Text>
        <Count />
      </HStack>

      <ButtonForm>Save product</ButtonForm>
    </Container>
  );
};

export default AddNewItem;
