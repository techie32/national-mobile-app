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
    // flex: 1,
    // flexDirection: "column",
  },
  heading: {
    fontSize: wp(9),
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
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
