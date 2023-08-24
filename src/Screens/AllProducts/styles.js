import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/Global';

export default styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    height: '100%',
    backgroundColor: COLORS.PRIMARY,
  },
  headingWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 14,
  },
  heading: {
    color: COLORS.BRIGHTGRAY,
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewIcon: {
    width: 14,
    height: 10,
    resizeMode: 'contain',
    marginLeft: 6,
  },
  viewTxt: {
    color: COLORS.ALICEBLUE,
    fontSize: 12,
  },
  mb20: {
    marginBottom: 20,
  },
  loader: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
