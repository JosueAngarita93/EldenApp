import React from 'react';
import {SafeAreaView} from 'react-native';
import CustonButton from '../../components/CustomButton';
import {styles} from './styles';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.SafeAreaContainer}>
      <CustonButton
        color="red"
        onPress={() => {
          navigation.navigate('Details', {
            title: 'anything you want here',
          });
        }}
      />
      <CustonButton
        onPress={() => {
          navigation.navigate('Details', {
            title: 'anything you want here',
          });
        }}
      />
      <CustonButton
        onPress={() => {
          navigation.navigate('Details', {
            title: 'anything you want here',
          });
        }}
      />
      <CustonButton
        onPress={() => {
          navigation.navigate('Details', {
            title: 'anything you want here',
          });
        }}
      />
      <CustonButton
        onPress={() => {
          navigation.navigate('Details', {
            title: 'anything you want here',
          });
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
