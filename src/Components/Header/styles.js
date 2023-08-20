import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/Global';

export default styles = StyleSheet.create({
  headerWrapper: {
    paddingVertical: 16,
    backgroundColor: COLORS.SECONDARY,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    color: COLORS.BRIGHTGRAY,
    fontSize: 18,
    fontWeight: 'bold',
  },
  backIcon: {
    width: 20,
    height: 24,
    resizeMode: 'contain',
    marginRight: 10,
    transform: [{rotate: '180 deg'}],
  },
});
