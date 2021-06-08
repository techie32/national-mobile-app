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
  heading: {
    fontSize: wp(9),
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
    width: "100%",
    backgroundColor: "lightgreen",
    textTransform: "uppercase",
  },

  allDeals: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  deal: {
    marginTop: 10,
  },
});
