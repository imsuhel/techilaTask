import {
  View,
  Text,
  FlatList,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {AllProductHooks} from './AllProductHooks';
import ImageViewer from 'react-native-image-zoom-viewer';
import {useNavigation, useRoute} from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';
import Header from '../../Components/Header/Header';
import ProductCard from '../../Components/ProductCard/ProductCard';

const AllProduct = () => {
  const width = Dimensions.get('window').width;
  const {
    getProductList,
    fetchProducts,
    productList,
    viewProduct,
    seeAllProduct,
  } = AllProductHooks();

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <View style={styles.mainWrapper}>
      <Header title="All Products" canBack={true} />
      <Carousel
        loop
        width={width}
        style={{marginTop: 30}}
        autoPlay={true}
        data={productList}
        scrollAnimationDuration={1000}
        autoPlayInterval={5000}
        renderItem={({item, index}) => (
          <ProductCard
            item={item}
            viewProduct={viewProduct}
            style={{width: '90%', alignSelf: 'center'}}
          />
        )}
      />
    </View>
  );
};

export default AllProduct;
