import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "utils/responsive";
import { fontFamily } from "assets/fonts";
import { colors } from "assets/colors";

export default StyleSheet.create({
  root: {
    height: "100%",
  },
  container: {
    marginHorizontal: wp(5),
  },
  heading: {
    fontSize: wp(7),
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
    backgroundColor: "lightgreen",
    marginBottom: hp(3),
  },
  inputContainer: {
    marginVertical: hp(1),
  },
  btn: {
    marginTop: hp(2),
  },
  product: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: wp(3),
  },
});
