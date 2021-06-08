import React, { useEffect, useState } from "react";
import style from "./style";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import {
  Modal,
  Text,
  View,
  ActivityIndicator,
  BackHandler,
  Image,
} from "react-native";
import { Button, Header } from "common";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "utils/responsive";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utils/responsive";

const CELL_COUNT = 4;

export const OTPVerification = ({ route, navigation }) => {
  const [isLoading, setloading] = useState(false);
  const [errMsg, setErrMsg] = useState();
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [toggleModal, settoggleModal] = useState(false);

  const handleVerification = () => {
    navigation.navigate("Deals");
  };

  const disableBackButton = () => {
    BackHandler.exitApp();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", disableBackButton);
  }, []);

  const handleValueChange = (val) => {
    setValue(val);
    setErrMsg("");
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={style.container}>
      <Header />
      <Text style={style.heading}>Enter 4 digit OTP code</Text>
      <View style={style.content}>
        <View style={style.codeFieldContainer}>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={handleValueChange}
            cellCount={CELL_COUNT}
            rootStyle={style.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={style.cell}
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
          <Text style={style.errMsg}>{errMsg}</Text>
        </View>

        <Button
          label={!isLoading && "Confirm code"}
          active={value?.length == CELL_COUNT && !isLoading}
          icon={
            !!isLoading && (
              <ActivityIndicator
                style={{ position: "absolute", left: wp("36") }}
              />
            )
          }
          onPress={handleVerification}
        />
      </View>

      <Modal animationType="fade" visible={toggleModal} transparent>
        <View style={style.overlay}>
          <View style={style.modalHeader}>
            <Image
              source={require("../../../assets/images/smile.png")}
              className={style.modalImage}
              width={widthPercentageToDP(2)}
              height={heightPercentageToDP(2)}
              resizeMode="contain"
            />
          </View>
          <Text>dsfsdfs</Text>
        </View>
      </Modal>
    </KeyboardAwareScrollView>
  );
};
