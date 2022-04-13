import React from 'react';
import {
  
  SafeAreaView,

} from 'react-native';
import { CustonButton } from '../../components/Buttons';


const Home = ({navigation}) => {
  return (
    <SafeAreaView style = {{backgroundColor: '#564215', flex: 1,}}>
      <CustonButton color = 'red' textColor = 'black' text = "Click Me" onPress={() => navigation.navigate('Details')} />
      <CustonButton color = 'blue' textColor = 'black' text = "Click Me" onPress={() => navigation.navigate('Details')} />
      <CustonButton color = 'blue' textColor = 'black' text = "Click Me" onPress={() => navigation.navigate('Details')} />
      <CustonButton color = 'blue' textColor = 'black' text = "Click Me" onPress={() => navigation.navigate('Details')} />
      <CustonButton color = 'blue' textColor = 'black' text = "Click Me" onPress={() => navigation.navigate('Details')} />
    </SafeAreaView>
  );
};


export default Home;
