import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/Global';

export default styles = StyleSheet.create({
    headerWrapper: {
        paddingVertical: 16,
        backgroundColor: COLORS.SECONDARY,
        paddingHorizontal: 10
    },
    title: {
        color: COLORS.BRIGHTGRAY,
        fontSize: 18,
        fontWeight: "bold"
    }
})