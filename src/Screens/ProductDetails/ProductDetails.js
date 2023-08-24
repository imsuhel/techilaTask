import {View, Text, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import ImageViewer from 'react-native-image-zoom-viewer';
import {useNavigation, useRoute} from '@react-navigation/native';

const ProductDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {productData} = route.params;

  return (
    <View style={styles.mainWrapper}>
      <View style={{height: 300}}>
        <ImageViewer
          imageUrls={productData.images.map(e => {
            return {url: e};
          })}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.heading}>{productData.title}</Text>
        <View>
          <Text style={styles.discount}>{productData.discountPercentage}%</Text>
          <Text style={styles.price}>${productData.price}</Text>
        </View>
      </View>
      <Text style={styles.desc}>{productData.description}</Text>
    </View>
  );
};

export default ProductDetails;
