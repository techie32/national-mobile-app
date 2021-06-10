import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "utils/responsive";
import { colors } from "../../assets/colors";

export default StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
  },
  modalHeader: {
    backgroundColor: colors.green,
    alignItems: "center",
    paddingVertical: hp(5),
  },
  modalImage: {
    width: hp(20),
    height: wp(20),
  },
  content: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
  },
  text: {
    textAlign: "center",
    fontSize: wp(4),
  },
  resBtn: {
    width: "80%",
    alignSelf: "center",
    marginVertical: hp(2),
  },
  logout: {
    width: "80%",
    marginVertical: hp(2),
    alignSelf: "center",
  },
});
