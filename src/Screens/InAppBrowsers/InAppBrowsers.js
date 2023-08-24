import {View, SafeAreaView, Alert} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
const InAppBrowsers = () => {
  return (
    <SafeAreaView style={{flex: 1, width: '100%', backgroundColor: '#f00'}}>
      <View style={{width: '100%', flex: 1}}>
        <WebView
          setSupportMultipleWindows={false}
          source={{uri: 'https://reactnative.dev/'}}
          style={{flex: 1}}
        />
      </View>
    </SafeAreaView>
  );
};
export default InAppBrowsers;
