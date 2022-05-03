import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustonButton from '../../components/CustomButton';
import {styles} from './styles';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {removeItemValue, objectGetData} from '../../utils/storage';
import OrderSummaryHeader from '../../components/OrderSummaryHeader';
import {dataHeader} from '../../dataBackend/order/mocks';
function HomeScreen({navigation}) {
  const validationUSer = async () => {
    const User = await objectGetData('@User');
    setUserLogin(User);
  };
  const [userLogin, setUserLogin] = useState(validationUSer);

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      this.setState({user: null}); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  const loguot = async () => {
    await removeItemValue('@User');
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.SafeAreaContainer}>
      <OrderSummaryHeader item={dataHeader} />
      <TouchableOpacity onPress={loguot}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: userLogin?.user?.photo,
          }}
        />
      </TouchableOpacity>
      {/* <CustonButton
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
      /> */}
    </SafeAreaView>
  );
}

function User() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>User Screen</Text>
    </View>
  );
}
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{headerShown: true}}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="User" component={User} />
    </Drawer.Navigator>
  );
}
const Home = () => {
  return <MyDrawer />;
};

export default Home;
