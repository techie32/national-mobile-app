import React from "react";
import { NativeTouchable } from "../NativeTouchable";
import { Text } from "react-native";
import style from "./style";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const Button = ({
  outline,
  primary,
  onPress,
  gradient,
  active = true,
  label,
  icon,
  customStyle = {},
  customLabelStyle = {},
  flat = false,
}) => {
  const primaryStyle = primary || active ? style.primary : {};
  const outlineStyle = outline ? style.outline : {};
  const lightStyle = flat ? style.light : {};
  return gradient ? (
    <LinearGradient
      start={[0, 1]}
      end={[1, 0]}
      style={{
        ...style.container,
        ...primaryStyle,
        ...outlineStyle,
        ...lightStyle,
        ...customStyle,
      }}
      colors={gradient}
    >
      <NativeTouchable
        onPress={active ? onPress : () => {}}
        style={{
          ...style.container,
          ...primaryStyle,
          ...outlineStyle,
          ...lightStyle,
          ...customStyle,
        }}
      >
        <Text
          style={[
            style.label,
            (primary || active) && style.primaryLabel,
            outline && style.outlineLabel,
            flat && style.lightLabel,
            customLabelStyle,
          ]}
        >
          {label}
        </Text>
        <View style={style.iconContainer}>{icon}</View>
      </NativeTouchable>
    </LinearGradient>
  ) : (
    <>
      <NativeTouchable
        onPress={active ? onPress : () => {}}
        style={{
          ...style.container,
          ...primaryStyle,
          ...outlineStyle,
          ...lightStyle,
          ...customStyle,
        }}
      >
        <Text
          style={[
            style.label,
            (primary || active) && style.primaryLabel,
            outline && style.outlineLabel,
            flat && style.lightLabel,
            customLabelStyle,
          ]}
        >
          {label}
        </Text>
        {icon && <View style={style.iconContainer}>{icon}</View>}
      </NativeTouchable>
    </>
  );
};
