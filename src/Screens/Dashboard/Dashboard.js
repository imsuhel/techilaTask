import {View, Text, FlatList, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import Header from '../../Components/Header/Header';
import Ripple from 'react-native-material-ripple';
import ProductCard from '../../Components/ProductCard/ProductCard';
import {DashboardHooks} from './DashboardHooks';

const Dashboard = () => {
  const {getProductList, fetchProducts, productList, productError} =
    DashboardHooks();

  useEffect(() => {
    getProductList();
  }, []);
  return (
    <View style={styles.mainWrapper}>
      <Header title="Movies" />
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <View style={styles.mb20}>
          <View style={styles.headingWrapper}>
            <Text style={styles.heading}>Popular</Text>
            <Ripple style={styles.viewBtn}>
              <Text style={styles.viewTxt}>View All</Text>
            </Ripple>
          </View>
          <FlatList
            data={productList}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={{columnGap: 14}}
            onEndReached={() => fetchProducts()}
            onEndReachedThreshold={0.5}
            renderItem={({item, index}) => (
              <ProductCard item={item} index={index} />
            )}
          />
        </View>

        <View style={styles.mb20}>
          <View style={styles.headingWrapper}>
            <Text style={styles.heading}>Playing In Theatres</Text>
            <Ripple style={styles.viewBtn}>
              <Text style={styles.viewTxt}>View All</Text>
            </Ripple>
          </View>
          <FlatList
            data={productList}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            horizontal={true}
            contentContainerStyle={{columnGap: 14}}
            onEndReached={() => fetchProducts()}
            onEndReachedThreshold={0.5}
            renderItem={({item, index}) => (
              <ProductCard item={item} index={index} style={{width: 240}} />
            )}
          />
        </View>

        <View style={styles.mb20}>
          <View style={styles.headingWrapper}>
            <Text style={styles.heading}>Trending</Text>
            <Ripple style={styles.viewBtn}>
              <Text style={styles.viewTxt}>View All</Text>
            </Ripple>
          </View>
          <FlatList
            data={productList}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            horizontal={true}
            contentContainerStyle={{columnGap: 14}}
            onEndReached={() => fetchProducts()}
            onEndReachedThreshold={0.5}
            renderItem={({item, index}) => (
              <ProductCard item={item} index={index} style={{width: 140}} />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;
