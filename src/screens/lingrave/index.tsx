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

import YouTube from 'react-native-youtube';
import {styles} from './styles';




const Lingrave = () => {
  const [playing, setPlaying] = useState(true);
  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);
  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.sectionTitle}>JEFES EN LINGRAVE</Text>
        <YouTube
          apiKey="1111"
          videoId="i333UOb0x8k"
          play
          fullscreen={false}
          loop={false}
          onReady={() => {}}
          onChangeState={() => {}}
          onChangeQuality={() => {}}
          onError={() => {}}
          style={styles.youtubeContainer}
        />
      </View>
    </SafeAreaView>
  );
};

export default Lingrave;
