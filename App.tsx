import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/home';
import Details from './src/screens/details';
import Lingrave from './src/screens/lingrave';
const Stack = createNativeStackNavigator();
const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Lingrave" component={Lingrave} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
