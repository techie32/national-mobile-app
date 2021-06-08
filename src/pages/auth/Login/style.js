import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "utils/responsive";
import { fontFamily } from "assets/fonts";
import { colors } from "assets/colors";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: wp("5"),
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    width: wp("30"),
    height: hp("18"),
  },
  errMsg: {
    fontSize: wp("3.6"),
    color: "red",
    fontFamily: fontFamily.PoppinsBold,
  },
  welcomeMessage: {
    fontFamily: fontFamily.PoppinsBold,
    width: "80%",
    fontSize: wp("8"),
    letterSpacing: 0,
    color: colors.mainTextColor,
    textAlign: "center",
  },
  link: {
    fontFamily: fontFamily.PoppinsMedium,
    fontSize: wp("3.25"),
    color: colors.activeColor,
    textAlign: "center",
    letterSpacing: 0,
  },
});
