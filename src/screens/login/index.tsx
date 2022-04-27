import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  TextInput,
  ImageBackground,
  Pressable,
} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

import SocialButton from '../../components/SocialButton';
import {objectStoreData, objectGetData} from '../../utils/storage';
import {styles} from './style';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validationUSer = async () => {
    const User = await objectGetData('@User');
    if (User) {
      navigation.navigate('Home');
    }
  };
  // const [login, setLogin] = useState(User);
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      await objectStoreData('@User', userInfo);
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  React.useEffect(() => {
    validationUSer();
  }, []);
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/N0JLrzNUy1Ep72Ynl0Gyi1x6.png',
        }}
      />
      <Text style={styles.text}>App</Text>

      <TextInput
        value={email}
        onChangeText={userEmail => setEmail(userEmail)}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.textimput}
      />

      <TextInput
        value={password}
        onChangeText={userPassword => setPassword(userPassword)}
        placeholder="Password"
        secureTextEntry={true}
        style={styles.textimput}
      />

      <TouchableOpacity
        style={styles.button}
        // onPress={onPress}
      >
        <Text style={styles.textbutton}>Sing in</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      {Platform.OS === 'android' ? (
        <View>
          {/* <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            // onPress={() => fbLogin()}
          /> */}
          <GoogleSigninButton
            style={{width: 192, height: 48}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signIn}
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
