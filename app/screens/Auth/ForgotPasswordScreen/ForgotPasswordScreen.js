import React, { useState, useEffect } from "react";
import { ImageBackground, View, KeyboardAvoidingView, Text, TouchableOpacity, } from "react-native";
import { Input, Button } from "react-native-elements"; 
import { Theme, Colors } from "../../../config";
import Icon from "react-native-vector-icons/Feather";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "../../../components";

import { isResponseSuccessful } from "../../../utils/utils/utils";

import { Storage } from "../../../utils";

import styles from "./styles";

function ForgotPasswordScreen({ navigation }) {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginErrors, setLoginErrors] = useState(null);
  const { register, setValue, handleSubmit, errors, triggerValidation, } = useForm();

  useEffect(() => {
    register({ name: "email" }, { required: true });
  }, [register]);

  // const resetPassword = async (data) => {
  //   setIsLoggingIn(true);
  //   setLoginErrors(null);

  //   await Auth._resetPassword(data).then((response) => {
  //     setIsLoggingIn(false);
  //     if ( response.data.error_code == 0) {
  //       navigation.navigate("Welcome");
  //     } else {
  //       // setLoginErrors(response.data.error);
  //       setLoginErrors("Incorrect email!");
  //     }
  //   });
  // };

  return (
    <>
      <ImageBackground
        style={styles.background}
        source={require("../../../assets/auth.png")}
      >
        {/* START:: Back button*/}
        <View
          style={{
            top: "5%",
            paddingHorizontal: 30,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon
              name="chevron-left"
              size={40}
              color={Colors.primaryButton}
              style={{ marginRight: 10, margin: 10 }}
            />
          </TouchableOpacity>
        </View>
        {/* END:: Back button */}

        <View style={styles.container}>
          <View style={styles.formContainer}>
            <KeyboardAvoidingView>
              <View>
                <Text style={Theme.headerText}>Reset Password</Text>
              </View>
              <View>
                <Text
                  style={{
                    color: Colors.subText,
                    fontWeight: "500",
                    fontSize: 14,
                    lineHeight: 18,
                    margin: 10,
                    paddingBottom: 20,
                  }}
                >
                  Enter the email address associated with your account, and
                  we’ll email you a link to reset your password.
                </Text>

                {loginErrors && <ErrorMessage>{loginErrors}</ErrorMessage>}

                <Input
                  label="Email Address"
                  labelStyle={Theme.labelStyle}
                  keyboardType="email-address"
                  inputContainerStyle={Theme.inputContainer}
                  onChangeText={(input) => (
                    setValue("email", input, true), triggerValidation(["email"])
                  )}
                />
                <View style={{ marginBottom: 68 }} />
                <Button
                  title="Reset Password"
                  buttonStyle={Theme.buttonPrimary}
                  titleStyle={{ alignItems: "center" }}
                  loading={isLoggingIn}
                  // onPress={handleSubmit(resetPassword)}
                />
              </View>
            </KeyboardAvoidingView>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

export default ForgotPasswordScreen;
