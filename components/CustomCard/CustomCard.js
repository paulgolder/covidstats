import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const CustomCard = ({
  country = "Dummy",
  totalConfirmed = "0",
  totalRecoverd = "0",
  totalDeaths = "0",
  active = "0",
  style = {},
  infoContainerStyle = {},
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={{ fontSize: 22, fontWeight: "900" }}>{country}</Text>

      <View style={styles.statsContainer}>
        <View
          style={[
            styles.infoContainer,
            { backgroundColor: "#f0f0f0" },
            infoContainerStyle,
          ]}
        >
          <FontAwesome5 name="virus" size={24} color="black" />
          <Text style={[styles.infoTitle]}>Total Active:</Text>
          <Text style={[styles.countText]}>{active}</Text>
        </View>
        <View
          style={[
            styles.infoContainer,
            { backgroundColor: "#FDE3D0" },
            infoContainerStyle,
          ]}
        >
          <FontAwesome5 name="file-alt" size={24} color="#F27A1F" />
          <Text style={[styles.infoTitle]}>Total Confirmed:</Text>
          <Text style={[styles.countText]}>{totalConfirmed}</Text>
        </View>

        <View
          style={[
            styles.infoContainer,
            { backgroundColor: "#D9FCD3" },
            infoContainerStyle,
          ]}
        >
          <FontAwesome5 name="pills" size={24} color="#25C30C" />
          <Text style={[styles.infoTitle]}>Total Recovered:</Text>
          <Text style={[styles.countText]}>{totalRecoverd}</Text>
        </View>

        <View
          style={[
            styles.infoContainer,
            { backgroundColor: "#ffdddd" },
            infoContainerStyle,
          ]}
        >
          <FontAwesome5 name="skull-crossbones" size={24} color="#ff0505" />
          <Text style={[styles.infoTitle]}>Total Deaths:</Text>
          <Text style={[styles.countText]}>{totalDeaths}</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    // elevation: 5,
    borderColor: "#049DBF",
    borderWidth: 1,
    minHeight: 200,
    minWidth: Dimensions.get("window").width * 0.9,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    flexWrap: "wrap",
  },
  infoContainer: {
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    height: 100,
    width: Dimensions.get("window").width * 0.4,
    marginVertical: 5,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "700",
  },
  countText: {
    fontSize: 14,
    fontWeight: "400",
    marginTop: 5,
  },
});
