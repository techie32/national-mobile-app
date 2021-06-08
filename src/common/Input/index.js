import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import style from "./style";
import { colors } from "../../assets/colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { widthPercentageToDP as wp } from "../../utils/responsive";
import { Controller } from "react-hook-form";

export const Input = React.forwardRef(
  (
    {
      error,
      valid,
      isPassword,
      placeholder = "Type here",
      message,
      control,
      name,
      required,
      defaultValue,
      handleErrMss,
      containerStyles,
    },
    ref
  ) => {
    const [show, setShow] = useState(false);
    const InputComponent = ({ field }) => {
      const { onChange, onBlur, value } = field;
      return (
        <TextInput
          ref={ref}
          onChangeText={(e) => {
            onChange(e);
            !!handleErrMss && handleErrMss();
          }}
          onBlur={onBlur}
          value={value}
          secureTextEntry={isPassword && !show}
          style={style.input}
          placeholder={placeholder}
          placeholderTextColor={colors.subTextColor}
          underlineColorAndroid={"transparent"}
        />
      );
    };
    return (
      <View style={[style.container, containerStyles && containerStyles]}>
        {!!control ? (
          <Controller
            control={control}
            render={InputComponent}
            name={name}
            defaultValue={defaultValue}
          />
        ) : (
          <InputComponent />
        )}

        {error && <Text style={style.textError}>{message}</Text>}
      </View>
    );
  }
);
