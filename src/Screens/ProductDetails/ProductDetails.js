import {View, Text, FlatList, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import ImageViewer from 'react-native-image-zoom-viewer';
import {useNavigation, useRoute} from '@react-navigation/native';

const ProductDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {productData} = route.params;
  return (
    <View style={styles.mainWrapper}>
      <ImageViewer
        enableSwipeDown
        onSwipeDown={() => navigation.pop()}
        imageUrls={[{url: productData}]}
        renderIndicator={() => {}}
      />
    </View>
  );
};

export default ProductDetails;
