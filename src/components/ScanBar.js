import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Button from './Button';
import MateriaIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ScanBar = () => {
  return (
    <View style={styles.scanBar}>
      <View style={styles.leftContent}>
        <Text style={styles.textContent}>Entering public space?</Text>
        <Button>
          <MateriaIcon name="line-scan" size={20} />
          <View style={styles.gap} />
          <Text>Scan QR Code</Text>
        </Button>
      </View>
      <View style={styles.rightContent}>
        <MateriaIcon name="qrcode" size={100} color="#2F4F4F" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scanBar: {
    backgroundColor: '#23ACE2',
    borderRadius: 20,
    flexDirection: 'row',
  },
  textContent: {
    marginBottom: 40,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  leftContent: {
    marginHorizontal: 15,
    marginVertical: 20,
  },
  gap: {
    width: 10,
  },
  rightContent: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});

export default ScanBar;
