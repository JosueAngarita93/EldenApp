import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';
import CustonButton from '../../components/CustomButton';

const Details = ({route, navigation}) => {
  const {title} = route.params;

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.sectionDescription}>{title}</Text>
        <CustonButton
          text="JEFES EN LINGRAVE"
          color={'gray'}
          onPress={() => navigation.navigate('Lingrave')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Details;
