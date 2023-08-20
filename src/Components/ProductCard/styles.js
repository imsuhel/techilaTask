import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/Global';

export default styles = StyleSheet.create({
    productCard: {
        width: 150,
    },
    productImg: {
        width: "100%",
        height: 180,
        borderWidth: 1,
        borderColor: COLORS.ARSENIC,
        marginBottom: 10,
        backgroundColor: COLORS.SECONDARY
    },
    productTitle: {
        color: COLORS.BRIGHTGRAY,
        fontSize: 14,
        fontWeight: "bold"
    },
    productDesc: {
        color: COLORS.ALICEBLUE,
        fontSize: 12,
    },
    productInfo: {
        flexDirection: "row",
        columnGap: 10,
        marginTop: 10
    },
    productInfoTxt: {
        color: COLORS.BRIGHTGRAY,
        fontSize: 12,
        fontWeight: "bold"
    }
})