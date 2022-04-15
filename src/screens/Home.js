import { View, StyleSheet } from 'react-native';
import React from 'react';
import MainBar from '../components/MainBar';
import Container from '../components/Container';
import ScanBar from '../components/ScanBar';

const Home = () => {
   return (
      <View>
         <Container>
            <View style={styles['mb-1']}>
               <MainBar />
            </View>
            <ScanBar />
         </Container>
      </View>
   );
};

const styles = StyleSheet.create({
   ['mb-1']: {
      marginBottom: 15,
   },
});

export default Home;
