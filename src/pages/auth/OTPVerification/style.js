import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "utils/responsive";
import { colors } from "../../../assets/colors";
import { fontFamily } from "assets/fonts";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    marginHorizontal: wp(5),
    height: "100%",
  },
  heading: {
    fontSize: wp(5),
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
  },
  content: {
    justifyContent: "space-between",
    flex: 1,
  },
  cell: {
    width: wp(12),
    height: wp(12),
    lineHeight: wp(12),
    fontSize: wp(6),
    marginLeft: 1,
    borderWidth: 2,
    borderRadius: wp(2.5),
    borderColor: colors.inactiveColor,
    fontFamily: fontFamily.PoppinsBold,
    textAlign: "center",
    color: "#000",
  },
  errMsg: {
    color: "red",
    fontFamily: fontFamily.PoppinsBold,
    fontSize: wp("3.5"),
    textAlign: "center",
    marginTop: wp(2),
  },

  codeFieldRoot: { marginTop: wp("5") },

  overlay: {
    flex: 1,
    justifyContent: "center",
  },
  modalHeader: {
    backgroundColor: colors.green,
    alignItems: "center",
  },
  modalImage: {
    width: hp(1),
    height: wp(1),
  },
});
