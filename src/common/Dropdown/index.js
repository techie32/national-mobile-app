import React from "react";
import { View, Text } from "react-native";
import style from "./style";
import { Picker } from "@react-native-community/picker";
import { Controller } from "react-hook-form";
export const Dropdown = ({
  items = [
    { label: "Area", value: "" },
    { label: "Gulshan", value: "Gulshan" },
  ],

  containerStyles,
  control,
  error,
  name,
  message,
}) => {
  const Dropdown = ({ field }) => {
    const { onChange, value } = field;
    return (
      <View style={[style.container, containerStyles && containerStyles]}>
        <View style={style.pickerView}>
          <Picker
            selectedValue={value}
            onValueChange={onChange}
            style={style.filterValue}
            mode="dropdown"
          >
            {items.map((item, index) => (
              <Picker.Item
                label={item.label}
                value={item.value}
                key={`${item.value} ${index}`}
              />
            ))}
          </Picker>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Controller
        control={control}
        render={Dropdown}
        name={name}
        defaultValue={items[0].value}
      />
      {error && <Text style={style.textError}>{message}</Text>}
    </View>
  );
};
