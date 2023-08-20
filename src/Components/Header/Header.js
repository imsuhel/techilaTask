import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Ripple from 'react-native-material-ripple';
import {IMAGES} from '../../utils/Global';
import {HeaderHooks} from './HeaderHooks';

const Header = ({title, canBack}) => {
  const {goBack} = HeaderHooks();
  return (
    <View style={styles.headerWrapper}>
      {canBack && (
        <Ripple onPress={() => goBack()}>
          <Image source={IMAGES.backIcon} style={styles.backIcon} />
        </Ripple>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
