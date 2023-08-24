import {
  View,
  Text,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {AllProductHooks} from './AllProductHooks';
import ImageViewer from 'react-native-image-zoom-viewer';
import {useNavigation, useRoute} from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';
import Header from '../../Components/Header/Header';
import ProductCard from '../../Components/ProductCard/ProductCard';
import {COLORS} from '../../utils/Global';

const AllProduct = () => {
  const navigation = useNavigation();
  const width = Dimensions.get('window').width;
  const {fetchProducts, productList, isLoading} = AllProductHooks();

  useEffect(() => {
    fetchProducts();
    console.log(productList, '222');
  }, []);

  return (
    <View style={styles.mainWrapper}>
      <Header title="All Products" canBack={true} />
      <FlatList
        data={productList}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{paddingHorizontal: 14, marginTop: 15}}
        onEndReached={() => fetchProducts()}
        onEndReachedThreshold={0.5}
        renderItem={({item, index}) => (
          <ProductCard
            key={index}
            item={item}
            style={{width: '48%'}}
            viewProduct={() =>
              navigation.navigate('ProductDetails', {
                productData: item,
              })
            }
          />
        )}
      />
      {isLoading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={COLORS.BRIGHTGRAY} />
        </View>
      )}
    </View>
  );
};

export default AllProduct;
