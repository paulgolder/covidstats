import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import React from "react";

const CustomButton = ({
  onPress = () => {},
  text = "Dummy",
  style,
  buttonColor = "dodgerblue",
  textColor = "white",
  textStyle = {},
}) => {
  return (
    <TouchableNativeFeedback onPress={onPress} useForeground={true}>
      {/* <View style={{ borderRadius: 10, overflow: "hidden" }}> */}
      <View
        style={[
          styles.buttonContainer,
          style,
          { backgroundColor: buttonColor },
        ]}
      >
        <Text style={[{ color: textColor, textAlign: "center" }, textStyle]}>
          {text}
        </Text>
      </View>
      {/* </View> */}
    </TouchableNativeFeedback>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    // elevation: 5,
  },
});
