import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "utils/responsive";
import { colors } from "assets/colors";
import { fontFamily } from "assets/fonts";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.cardBackground,
    marginVertical: wp(3),
    padding: wp(1),
    borderRadius: wp(3),
    alignItems: "center",
    alignContent: "center",
    paddingLeft: wp(3),
  },
  pickerView: {
    minWidth: wp(40),
    backgroundColor: colors.cardBackground,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: wp("1"),
    height: wp(4),
  },
  filterName: {
    position: "absolute",
    zIndex: 2,
    paddingLeft: wp("3"),
    color: colors.mainTextColor,
  },
  filterValue: {
    width: "80%",
    textAlign: "right",
    marginLeft: wp("12"),
    position: "relative",
    color: colors.activeColor,
    fontFamily: fontFamily.PoppinsBold,
    fontSize: wp("1"),
  },
});
