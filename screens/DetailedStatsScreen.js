import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomCard from "../components/CustomCard/CustomCard";

const DetailedStatsScreen = ({ navigation, route }) => {
  const { country } = route.params;
  console.log(country);
  return (
    <View style={[styles.container]}>
      <CustomCard
        country={country.Country}
        totalConfirmed={country.TotalConfirmed}
        totalRecovered={country.TotalRecovered}
        totalDeaths={country.TotalDeaths}
        active={
          country.TotalConfirmed + country.TotalRecovered + country.TotalDeaths
        }
        infoContainerStyle={{ width: "100%", marginVertical: 10 }}
      />
    </View>
  );
};

export default DetailedStatsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
