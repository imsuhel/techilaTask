import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/Global';

export default styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    height: '100%',
    backgroundColor: COLORS.PRIMARY,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 14,
  },
  heading: {
    color: COLORS.BRIGHTGRAY,
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  discount: {
    color: COLORS.BRIGHTGRAY,
    fontSize: 12,
  },
  price: {
    color: COLORS.ALICEBLUE,
    fontSize: 18,
    fontWeight: 'bold',
  },
  desc: {
    color: COLORS.ALICEBLUE,
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
});
