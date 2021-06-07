import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";
import { widthPercentageToDP as wp } from "../../utils/responsive";
import { fontFamily } from "../../assets/fonts";

export default StyleSheet.create({
  container: {
    width: "100%",
  },
  input: {
    width: "100%",
    height: wp("11.75"),
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: 10,
    borderRadius: wp(2),
  },
  inputContainer: {
    backgroundColor: "transparent",
    borderColor: colors.inactiveColor,
    borderWidth: wp("0.25"),
    height: wp("12"),
    borderStyle: "solid",
    fontFamily: fontFamily.PoppinsMedium,
    borderRadius: wp("6"),
    paddingHorizontal: wp("6"),
    width: "100%",
  },
  textError: {
    fontSize: wp("3"),
    color: "red",
    marginTop: wp("2"),
    paddingHorizontal: wp("6"),
  },
});
