import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "utils/responsive";
import { fontFamily } from "assets/fonts";
import { colors } from "assets/colors";

export default StyleSheet.create({
  container: {
    marginHorizontal: wp(5),
    height: "100%",
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
  formFields: {
    marginVertical: wp(2),
  },
});
