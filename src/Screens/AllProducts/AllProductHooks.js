import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AllProductHooks = () => {
  const [productList, setProductList] = useState();
  const [productError, setProductErrro] = useState();
  const [productLimit, setProductLimit] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = () => {
    setIsLoading(true);
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
        setIsLoading(false);
        if (result.products.length > 0) {
          setProductList(result.products);
          setProductLimit(productLimit + 10);
        } else {
          setProductErrro('Product Not found :(');
        }
      })
      .catch(error => {
        console.log('error', error);
        setIsLoading(false);
      });
  };

  return {
    fetchProducts,
    productList,
    isLoading,
  };
};

export {AllProductHooks};
