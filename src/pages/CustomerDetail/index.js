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
import { CustomerDetailSchema } from "schemas";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { widthPercentageToDP as wp } from "utils/responsive";
import { Input, Button, Dropdown, Header } from "../../common";

export const CustomerDetail = () => {
  const [isLoading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState();
  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(CustomerDetailSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const { errors } = formState;

  const handleErrMss = () => {
    setErrMsg("");
  };

  const onSubmit = () => {};

  return (
    <KeyboardAwareScrollView contentContainerStyle={style.container}>
      <Header />
      <Text style={style.heading}> Customer Details </Text>
      <Input
        ref={control}
        control={control}
        name="name"
        placeholder="Customer Name"
        error={!!errors?.name}
        message={errors?.name?.message}
        valid={formState.dirtyFields?.name && !errors.name}
        handleErrMss={handleErrMss}
        containerStyles={style.inputContainer}
      />
      <Input
        ref={control}
        control={control}
        name="gender"
        placeholder="Gender"
        error={!!errors?.gender}
        message={errors?.gender?.message}
        valid={formState.dirtyFields?.gender && !errors.gender}
        handleErrMss={handleErrMss}
        containerStyles={style.inputContainer}
      />
      <Input
        ref={control}
        control={control}
        name="prevBrand"
        placeholder="Previous Brand"
        error={!!errors?.prevBrand}
        message={errors?.prevBrand?.message}
        valid={formState.dirtyFields?.prevBrand && !errors.prevBrand}
        handleErrMss={handleErrMss}
        containerStyles={style.inputContainer}
      />
      <Input
        ref={control}
        control={control}
        name="address"
        placeholder="Address Line 01"
        error={!!errors?.address}
        message={errors?.address?.message}
        valid={formState.dirtyFields?.address && !errors.address}
        handleErrMss={handleErrMss}
        containerStyles={style.inputContainer}
      />
      <Input
        ref={control}
        control={control}
        name="area"
        placeholder="Area"
        error={!!errors?.area}
        message={errors?.area?.message}
        valid={formState.dirtyFields?.area && !errors.area}
        handleErrMss={handleErrMss}
        containerStyles={style.inputContainer}
      />
      <Input
        ref={control}
        control={control}
        name="email"
        placeholder="E-mail ID (optional)"
        error={!!errors?.email}
        message={errors?.email?.message}
        valid={formState.dirtyFields?.email && !errors.email}
        handleErrMss={handleErrMss}
        containerStyles={style.inputContainer}
      />
      <Input
        ref={control}
        control={control}
        name="mobile"
        placeholder="Mobile Network"
        error={!!errors?.mobile}
        message={errors?.mobile?.message}
        valid={formState.dirtyFields?.mobile && !errors.mobile}
        handleErrMss={handleErrMss}
        containerStyles={style.inputContainer}
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
    </KeyboardAwareScrollView>
  );
};
