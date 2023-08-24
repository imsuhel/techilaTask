import {View, Text, FlatList, ScrollView, Image} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import Header from '../../Components/Header/Header';
import Ripple from 'react-native-material-ripple';
import ProductCard from '../../Components/ProductCard/ProductCard';
import {DashboardHooks} from './DashboardHooks';
import {IMAGES} from '../../utils/Global';
import {useNavigation} from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();
  const {getProductList, fetchProducts, productList} = DashboardHooks();

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <View style={styles.mainWrapper}>
      <Header title="Movies" />
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <View style={styles.mb20}>
          {productList?.map((data, count) => (
            <>
              <View style={[styles.headingWrapper, count > 0 && styles.mt30]}>
                <Text style={styles.heading}>{data.catename}</Text>
                <Ripple
                  style={styles.viewBtn}
                  onPress={() => navigation.navigate('AllProduct')}>
                  <Text style={styles.viewTxt}>View All</Text>
                  <Image source={IMAGES.backIcon} style={styles.viewIcon} />
                </Ripple>
              </View>
              <FlatList
                data={data.data}
                key={data.catename}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={{columnGap: 14}}
                renderItem={({item, index}) => (
                  <>
                    <ProductCard
                      item={item}
                      index={index}
                      viewProduct={() =>
                        navigation.navigate('ProductDetails', {
                          productData: item,
                        })
                      }
                      style={[count % 2 == 0 ? {width: 240} : {width: 150}]}
                    />
                  </>
                )}
              />
            </>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;
