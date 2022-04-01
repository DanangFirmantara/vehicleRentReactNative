import React from 'react';
import Container from '../components/Container';
import {Image, Input, HStack, Text, FlatList, Box} from 'native-base';
import imgHeader from '../assets/image/home.png';
import ButtonForm from '../components/ButtonForm';

const HomeAdmin = () => {
  const data = [
    {
      alt: 'img1',
      img: imgHeader,
    },
    {
      alt: 'img2',
      img: imgHeader,
    },
    {
      alt: 'img3',
      img: imgHeader,
    },
  ];
  return (
    <>
      <Image source={imgHeader} width={'100%'} alt="imgHeader" height={267} />
      <Container>
        <HStack space={5} marginTop={3}>
          <Input placeholder={'Select Location'} flex={1} />
          <Input placeholder={'Car'} width={100} />
        </HStack>
        <ButtonForm>Search Vehicle</ButtonForm>
        <HStack>
          <Text flex={1} fontWeight="bold">
            Recommended
          </Text>
          <Text underline={'true'} fontWeight="bold">
            View More
          </Text>
        </HStack>
        <Box marginY={2} flex={1}>
          <FlatList
            horizontal={true}
            data={data}
            renderItem={({item}) => (
              <Box>
                <HStack>
                  <Image source={item.img} alt={item.alt} />
                </HStack>
              </Box>
            )}
          />
        </Box>

        <ButtonForm
          color="rgba(57, 57, 57, 1)"
          textColor="rgba(255, 205, 97, 1)">
          Add new item
        </ButtonForm>
      </Container>
    </>
  );
};

export default HomeAdmin;
