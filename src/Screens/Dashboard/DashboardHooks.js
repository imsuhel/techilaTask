import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const DashboardHooks = () => {
  const navigation = useNavigation();
  const [productList, setProductList] = useState();
  const [productError, setProductErrro] = useState();
  const [productLimit, setProductLimit] = useState(10);

  const shortProducts = async () => {
    // Create an object to store products by category
  };

  const getProductList = async () => {
    let localProduct = await AsyncStorage.getItem('productList');
    if (localProduct !== null) {
      setProductList(JSON.parse(localProduct));
    } else {
      fetchProducts();
    }
  };

  const fetchProducts = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('https://dummyjson.com/products?limit=100', requestOptions)
      .then(response => response.json())
      .then(async result => {
        if (result.products.length > 0) {
          const productsByCategory = {};

          // Group products by category
          result.products.forEach(product => {
            if (!productsByCategory[product.category]) {
              productsByCategory[product.category] = [];
            }
            productsByCategory[product.category].push(product);
          });

          const formattedProducts = Object.keys(productsByCategory).map(
            category => ({
              catename: category,
              data: productsByCategory[category],
            }),
          );

          setProductList(formattedProducts);
          await AsyncStorage.setItem(
            'productList',
            JSON.stringify(formattedProducts),
          );
        } else {
          setProductErrro('Product Not found :(');
        }
      })
      .catch(error => console.log('error', error));
  };

  return {
    getProductList,
    fetchProducts,
    shortProducts,
    productList,
  };
};

export {DashboardHooks};
