import {View, Text, FlatList, Image, Linking} from 'react-native';
import React, {useEffect, useState} from 'react';
import Styles from '../utils/Styles';
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();
  const [newsList, setNewsList] = useState([]);
  useEffect(() => {
    // getNewsData();
  }, []);

  const getNewsData = async () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://newsapi.org/v2/top-headlines?country=in&apiKey=f3ec413f206f49258ae32885291ece58',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result.status == 'ok') {
          setNewsList(result.articles);
        } else {
          newsList([]);
        }
      })
      .catch(error => console.log('error', error));
  };
  return (
    <View style={Styles.screenStyle}>
      <FlatList
        data={newsList}
        pagingEnabled
        renderItem={({item}) => (
          <View style={Styles.singleNews}>
            <View>
              <Image source={{uri: item.urlToImage}} style={Styles.fullImage} />
              <View style={Styles.authorRow}>
                <Text style={Styles.normalTxt}>Author : {item.author}</Text>
                <Text style={Styles.normalTxt}>
                  Source : {item.source?.name}
                </Text>
                <Text style={Styles.normalTxt}>Date : {item.publishedAt}</Text>
              </View>
              <View style={[Styles.mb15, Styles.px15]}>
                <Text style={[Styles.bigTxt, {marginBottom: 20}]}>
                  {item.title}
                </Text>
                <Text style={[Styles.normalTxt, {lineHeight: 22}]}>
                  {item.description}
                </Text>
              </View>
            </View>
            <Ripple
              onPress={() =>
                navigation.navigate('NewsDetails', {url: item.url})
              }
              style={Styles.readBtn}
              rippleColor="#fff">
              <View>
                <Text style={Styles.normalTxt}>Read more at</Text>
                <Text style={Styles.bigTxt}>{item.source?.name}</Text>
              </View>
              <Icon name="external-link" size={50} color={Styles.whiteColor} />
            </Ripple>
          </View>
        )}
      />
    </View>
  );
};

export default Dashboard;
