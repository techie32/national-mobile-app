import React, { useState, useEffect } from "react";
import style from "./style";
import { Text, ActivityIndicator, View, ImageBackground } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CustomerDetailSchema } from "schemas";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { widthPercentageToDP as wp } from "utils/responsive";
import { Input, Button, Dropdown, Header, CheckBox } from "../../common";
import { gender, mobileNetwork, prevBrand } from "../../dummyData";

export const CustomerDetail = ({ navigation }) => {
  const [isLoading, setLoading] = useState(false);
  const [termOfService, setTermsOfService] = useState(false);

  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(CustomerDetailSchema),
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
    <View>
      <ImageBackground
        source={require("../../assets/images/texture.png")}
        style={{
          justifyContent: "center",
          flex: 1,
          resizeMode: "cover",
          // height: 20,
        }}
        // resizeMode="cover"
      />
      <KeyboardAwareScrollView contentContainerStyle={[style.container]}>
        <Header />
        <Text style={style.heading}> Customer Details </Text>
        <Input
          ref={control}
          control={control}
          name="name"
          placeholder="Customer Name"
          error={!!errors?.name}
          message={errors?.name?.message}
          containerStyles={style.inputContainer}
        />
        <Dropdown
          control={control}
          name="gender"
          error={!!errors?.gender}
          message={errors?.gender?.message}
          containerStyles={style.inputContainer}
          items={gender}
        />
        <Dropdown
          control={control}
          name="prevBrand"
          error={!!errors?.prevBrand}
          message={errors?.prevBrand?.message}
          containerStyles={style.inputContainer}
          items={prevBrand}
        />
        <Input
          ref={control}
          control={control}
          name="address"
          placeholder="Address Line 01"
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
