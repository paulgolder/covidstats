import { Button, Platform, StyleSheet, Animated, Text, View } from "react-native";
import React, { useRef, useEffect, useState } from "react";

import { handleGetCovidStats } from "../services/handleGetCovidStats";

// This is a custom button it works fine on mobile but issues on web as this is not a button element for web
import CustomButton from "../components/CustomButton/CustomButton";
import CustomCard from "../components/CustomCard/CustomCard";
import AnimatedText from "../components/AnimatedText/AnimatedText";

const HomeScreen = ({ navigation }) => {
  const [countryData, setCountryData] = useState(null);
  useEffect(() => {
    console.log("HomeScreen mounted");
    handleGetCovidStats("united-kingdom")
      .then((res) => {
        // console.log(res);
        setCountryData(res[res?.length - 1]);
        console.log(countryData);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      console.log("HomeScreen unmounted");
    };
  }, []);

  // This screen shows the data for the UK for the latest date
  return (
    <View style={[styles.container]}>

      <AnimatedText style={{color: "blue", textAlign: "center", paddingBottom: 20, fontSize: 16}}>
        Welcome to Covid-19 update
      </AnimatedText>

      <CustomCard
        color="#f9c500"
        fontSize={24}
        country={"United Kingdom"}
        totalConfirmed={countryData?.Confirmed}
        totalRecovered={countryData?.Recovered}
        totalDeaths={countryData?.Deaths}
        active={countryData?.Active}
        infoContainerStyle={{ width: "100%", marginVertical: 10 }}
      />

      {/* <CustomButton
        text="Show All Countries"
        style={{ marginTop: 50 }}
        onPress={() => navigation.navigate("List")}
      /> */}
      <View style={{ marginTop: 50 }}>
        <Button
          title="Show All Countries"
          onPress={() => navigation.navigate("List")}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
    marginTop: Platform.OS === "android" ? 25 : 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
