import React, {useState, useCallback, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
} from 'react-native';
import {styles} from './styles';


import {Colors} from 'react-native/Libraries/NewAppScreen';
import {newLocal} from './styles';

const Details = ({title, navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <View
          style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <Text style={newLocal.sectionDescription} >{title}</Text>
          <Text style={newLocal.sectionDescription} >{title}</Text>
          <Button
            title="JEFES EN
            LINGRAVE"
            onPress={() => navigation.navigate('Lingrave')}
          />
        </View>
      
    </SafeAreaView>
  );
};

export default Details;
