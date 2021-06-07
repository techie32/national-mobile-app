import React from "react";
import { View, Text, Image } from "react-native";
import style from "./style";
import { colors } from "assets/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "utils/responsive";
// import { Picker } from "@react-native-community/picker";
// import { Picker } from "@react-native-picker/picker";
import { Picker } from "native-base";

export const Dropdown = ({
  items = [
    { label: "FCB Fans", value: "FCB Fans" },
    { label: "FCB Fans", value: "FCB Fans" },
  ],
  styles,
  selectedLanguage,
  setSelectedLanguage,
}) => {
  return (
    <View style={[style.container]}>
      <Text style={style.filterName}>Filter:</Text>
      <View style={style.pickerView}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
          style={style.filterValue}
          mode="dropdown"
        >
          {items.map((item, index) => (
            <Picker.Item
              label={item.label}
              value={item.value}
              key={`areas ${index}`}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};
