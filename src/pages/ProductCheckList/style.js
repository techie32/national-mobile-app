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
    margin: wp("5"),
    padding: 0,
    marginVertical: 0,
  },
  heading: {
    fontSize: wp(9),
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
    width: "100%",
    backgroundColor: "lightgreen",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#000",
    fontSize: wp(5),
    marginVertical: wp(3),
  },
  product: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  description: {
    fontSize: wp(4),
  },
});
