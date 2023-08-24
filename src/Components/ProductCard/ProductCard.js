import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Ripple from 'react-native-material-ripple';

const ProductCard = ({item, index, style, viewProduct}) => {
  return (
    <Ripple
      onPress={() => viewProduct()}
      style={[
        styles.productCard,
        style,
        index == 0 ? {marginHorizontal: 20} : {marginRight: 10},
      ]}>
      <Image source={{uri: item.thumbnail}} style={styles.productImg} />
      <Text numberOfLines={1} style={styles.productTitle}>
        {item.title}
      </Text>
      <Text numberOfLines={1} style={styles.productDesc}>
        {item.description}
      </Text>
      <View style={styles.productInfo}>
        <Text style={styles.productInfoTxt}>Price : $ {item.price}</Text>
        <Text style={styles.productInfoTxt}>Stock : {item.stock}</Text>
      </View>
    </Ripple>
  );
};

export default ProductCard;
