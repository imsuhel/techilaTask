import {View, Text} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
import Styles from '../utils/Styles';
import {useRoute, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Ripple from 'react-native-material-ripple';

const NewsDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  console.log(route.params.url, 'route');
  return (
    <View style={[Styles.screenStyle, {backgroundColor: Styles.blackColor}]}>
      <Ripple
        onPress={() => navigation.pop()}
        style={{
          paddingVertical: 10,
          paddingHorizontal: 15,
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 15,
        }}>
        <Icon name="closecircle" size={30} color={Styles.whiteColor} />
        <Text style={Styles.bigTxt}>Assignment App</Text>
      </Ripple>
      <WebView
        source={{uri: route.params.url}}
        style={{flex: 1, width: '100%', height: '100%'}}
      />
    </View>
  );
};

export default NewsDetails;
