import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "utils/responsive";

export default StyleSheet.create({
  logoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 0,
    padding: 0,
  },
  logo: {
    width: wp("30"),
    height: hp(15),
    margin: 0,
    padding: 0,
  },
});
