import React, { useState, useEffect } from "react";
import style from "./style";
import {
  Image,
  Text,
  View,
  ActivityIndicator,
  BackHandler,
} from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema } from "schemas";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { widthPercentageToDP as wp } from "utils/responsive";
import { Input, Button, Dropdown, Header, Texture } from "../../../common";
import { areas } from "../../../dummyData";

export const Login = ({ navigation }) => {
  const [isLoading, setLoading] = useState(false);
  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const { errors } = formState;

  const disableBackButton = () => {
    BackHandler.exitApp();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", disableBackButton);
  }, []);

  const onSubmit = (data) => {
    navigation.navigate("CustomerDetail");
  };

  return (
    <View style={style.root}>
      <Texture />
      <Header />

      <KeyboardAwareScrollView contentContainerStyle={style.container}>
        <Dropdown
          control={control}
          name="area"
          error={!!errors?.area}
          message={errors?.area?.message}
          containerStyles={style.formFields}
          items={areas}
        />
        <Input
          ref={control}
          control={control}
          name="email"
          placeholder="E-mail address"
          error={!!errors?.email}
          message={errors?.email?.message}
          containerStyles={style.formFields}
        />

        <Input
          ref={control}
          control={control}
          name="password"
          placeholder="Password"
          error={!!errors?.password}
          message={errors?.password?.message}
          isPassword
          containerStyles={style.formFields}
        />
        <Button
          label={!isLoading && "Login"}
          primary={formState.isValid}
          icon={
            isLoading && (
              <ActivityIndicator
                style={{ position: "absolute", left: wp("36") }}
              />
            )
          }
          active={formState.isValid && !isLoading}
          onPress={handleSubmit(onSubmit)}
          containerStyles={style.formFields}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};
