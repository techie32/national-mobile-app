import React, { useState, useEffect } from "react";
import style from "./style";
import { Text, ActivityIndicator, View, Image } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RetailerDetailSchema } from "schemas";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { widthPercentageToDP as wp } from "utils/responsive";
import {
  Input,
  Button,
  Dropdown,
  Header,
  CheckBox,
  Texture,
} from "../../common";
import { mobileNetwork, relations } from "../../dummyData";

export const RetailerDetail = ({ navigation }) => {
  const [isLoading, setLoading] = useState(false);

  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(RetailerDetailSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
    if (data.terms) navigation.navigate("OTPVerification");
  };

  const item = { value: false, description: "I agree to term of service" };

  return (
    <View style={{ height: "100%" }}>
      <Texture />
      <Header />
      <KeyboardAwareScrollView contentContainerStyle={[style.container]}>
        <Text style={style.heading}> Shop Keeper Detail </Text>
        <Input
          ref={control}
          control={control}
          name="shopName"
          placeholder="Shop Name"
          error={!!errors?.shopName}
          message={errors?.shopName?.message}
          containerStyles={style.inputContainer}
        />
        <Input
          ref={control}
          control={control}
          name="address"
          placeholder="Shop Address Line 01"
          error={!!errors?.address}
          message={errors?.address?.message}
          containerStyles={style.inputContainer}
        />
        <Input
          ref={control}
          control={control}
          name="area"
          placeholder="Area"
          error={!!errors?.area}
          message={errors?.area?.message}
          containerStyles={style.inputContainer}
          editable={false}
        />
        <Input
          ref={control}
          control={control}
          name="email"
          placeholder="E-mail ID (optional)"
          error={!!errors?.email}
          message={errors?.email?.message}
          containerStyles={style.inputContainer}
        />
        <Dropdown
          control={control}
          name="mobile"
          error={!!errors?.mobile}
          message={errors?.mobile?.message}
          containerStyles={style.inputContainer}
          items={mobileNetwork}
        />
        <Input
          ref={control}
          control={control}
          name="number"
          placeholder="Number"
          error={!!errors?.number}
          message={errors?.number?.message}
          containerStyles={style.inputContainer}
          keyboardType="numeric"
        />
        <Dropdown
          control={control}
          name="relationship"
          error={!!errors?.relationship}
          message={errors?.relationship?.message}
          containerStyles={style.inputContainer}
          items={relations}
        />
        <Button
          label={!isLoading && "Submit"}
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
          containerStyles={style.btn}
        />

        <View style={style.product}>
          <CheckBox item={item} control={control} name="terms" />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
