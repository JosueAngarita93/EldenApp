import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {styles} from './styles';

const Home = ({title, navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text style={styles.sectionDescription} >{title}</Text>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
