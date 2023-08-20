import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/Global';

export default styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        height: "100%",
        backgroundColor: COLORS.PRIMARY
    },
    headingWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingTop: 20,
        paddingBottom: 14
    },
    heading: {
        color: COLORS.BRIGHTGRAY,
        fontSize: 16,
        fontWeight: "bold"
    },
    viewBtn: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    viewTxt: {
        color: COLORS.ALICEBLUE,
        fontSize: 12,
    },
    mb20: {
        marginBottom: 20
    }
})