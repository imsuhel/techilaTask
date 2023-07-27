import {StyleSheet, Dimensions} from 'react-native';

const whiteColor = '#ffffff';
const blackColor = '#1C1D1F';
const screenBG = '#EDEEF0';
const borderColor = '#E7F6F2';

export default StyleSheet.create({
  whiteColor: whiteColor,
  blackColor: blackColor,
  screenBG: screenBG,
  borderColor: borderColor,
  screenStyle: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  mb15: {
    marginBottom: 15,
  },
  px15: {
    paddingHorizontal: 15,
  },
  bigTxt: {
    fontSize: 18,
    fontFamily: 'poppinsBold',
    fontWeight: 'bold',
    color: whiteColor,
  },
  normalTxt: {
    fontSize: 14,
    fontFamily: 'poppinsRegular',
    color: whiteColor,
  },
  fullImage: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  singleNews: {
    height: Dimensions.get('window').height - 24,
    width: '100%',
    backgroundColor: blackColor,
    justifyContent: 'space-between',
  },
  authorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: 20,
    paddingHorizontal: 15,
    paddingVertical: 16,
    flexWrap: 'wrap',
    rowGap: 6,
  },
  readBtn: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 15,
    backgroundColor: blackColor,
    borderTopWidth: 1,
    borderTopColor: borderColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
