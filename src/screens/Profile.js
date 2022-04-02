import {Box, Button, FlatList, HStack, Pressable, Text} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import React from 'react';
import {useDispatch} from 'react-redux';
import Container from '../components/Container';
import TopBarUser from '../components/TopBarUser';
import {doLogout} from '../redux/actions/auth';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(doLogout());
  };
  const data = [
    {
      menu: 'Your Favorite',
      to: 'YourFavorite',
    },
    {
      menu: 'FAQ',
      to: 'FAQ',
    },
    {
      menu: 'Help',
      to: 'Help',
    },
    {
      menu: 'Update Profile',
      to: 'UpdateProfile',
    },
  ];
  const navigation = useNavigation();
  return (
    <Container>
      <TopBarUser />
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <Pressable onPress={() => navigation.navigate(item.to)}>
              {({isHovered, isFocused, isPressed}) => {
                return (
                  <Box
                    py="2"
                    px="2"
                    bg={
                      isPressed
                        ? 'coolGray.200'
                        : isHovered
                        ? 'coolGray.200'
                        : 'transparent'
                    }>
                    <HStack alignItems={'center'}>
                      <Text fontSize={18} fontWeight={600} flex={1}>
                        {item.menu}
                      </Text>
                      <Icon name="chevron-right" size={30} />
                    </HStack>
                  </Box>
                );
              }}
            </Pressable>
          );
        }}
      />
      <Box flex={1} />
      <Button
        height={50}
        bg={'rgba(255, 205, 97, 1)'}
        color={'rgba(57, 57, 57, 1)'}
        fontWeight="bold"
        fontSize={18}
        borderRadius={10}
        marginY={2}
        onPress={onLogout}>
        <Text fontSize={17} fontWeight={'bold'}>
          Logout
        </Text>
      </Button>
    </Container>
  );
};

export default Profile;
