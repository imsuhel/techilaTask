import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const HeaderHooks = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.pop();
  };
  return {
    goBack,
  };
};

export {HeaderHooks};
