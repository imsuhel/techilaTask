import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const AllProductHooks = () => {
  const navigation = useNavigation();
  const [productList, setProductList] = useState();
  const [productError, setProductErrro] = useState();
  const [productLimit, setProductLimit] = useState(10);

  const viewProduct = productData => {
    navigation.navigate('ProductDetails', {productData});
  };
  const seeAllProduct = () => {
    navigation.navigate('AllProduct');
  };

  const getProductList = async () => {
    let localProduct = await AsyncStorage.getItem('productList');
    if (localProduct !== null) {
      setProductList(JSON.parse(localProduct));
      setProductLimit(JSON.parse(localProduct).length + 10);
    } else {
      fetchProducts();
    }
  };

  const fetchProducts = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://dummyjson.com/products?skip=5&limit=' + productLimit,
      requestOptions,
    )
      .then(response => response.json())
      .then(async result => {
        if (result.products.length > 0) {
          setProductList(result.products);
          await AsyncStorage.setItem(
            'productList',
            JSON.stringify(result.products),
          );
          setProductLimit(productLimit + 10);
        } else {
          setProductErrro('Product Not found :(');
        }
      })
      .catch(error => console.log('error', error));
  };

  return {
    getProductList,
    fetchProducts,
    productList,
    productError,
    viewProduct,
    seeAllProduct,
  };
};

export {AllProductHooks};
