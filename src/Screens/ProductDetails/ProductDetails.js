import {View, Text, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import ImageViewer from 'react-native-image-zoom-viewer';
import {useNavigation, useRoute} from '@react-navigation/native';

const ProductDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {productData} = route.params;
  const [sliderImage, setSliderImage] = useState([]);

  useEffect(() => {
    extractImages();
  }, []);

  const extractImages = async () => {
    const imageUrls = productData.images.map(url => ({url}));
    setSliderImage(imageUrls);
  };

  return (
    <View style={styles.mainWrapper}>
      <View style={{height: 300}}>
        <ImageViewer
          imageUrls={[
            {url: 'https://i.dummyjson.com/data/products/1/1.jpg'},
            {url: 'https://i.dummyjson.com/data/products/1/2.jpg'},
            {url: 'https://i.dummyjson.com/data/products/1/3.jpg'},
            {url: 'https://i.dummyjson.com/data/products/1/4.jpg'},
            {url: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg'},
          ]}
          renderImage={props => <Image {...props} />}
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
