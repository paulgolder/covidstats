import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { handleGetGlobalStats } from "../services/handleGetGlobalStats";
import { useIsFocused } from "@react-navigation/native";

const ListScreen = ({ navigation }) => {
  const [countryName, setCountryName] = useState("");
  const [countriesData, setCountriesData] = useState([]);
  const [filteredCountriesData, setFilteredCountriesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const focused = useIsFocused();

  useEffect(() => {
    if (!focused) return;
    console.log("ListScreen mounted");
    setLoading(true);
    handleGetGlobalStats()
      .then((res) => {
        // console.log(res);
        setCountriesData(res?.Countries);
        setFilteredCountriesData(res?.Countries);
        // console.log(countriesData);
        setLoading(false);
      })
      .catch((ex) => {
        console.log(ex);
        setLoading(false);
      });
  }, [focused]);

  useEffect(() => {
    console.log("countryName changed");
    if (countryName.length > 0) {
      const filteredData = countriesData?.filter((item) => {
        return item.Country.toLowerCase().includes(countryName.toLowerCase());
      });
      setFilteredCountriesData(filteredData);
    } else {
      setFilteredCountriesData(countriesData);
    }
  }, [countryName]);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <ActivityIndicator color="black" size={25} />
      </View>
    );
  }

  // This screen shows the data of all countries for the counts total confirmed cases
  return (
    <View style={[styles.container]}>
      <TextInput
        style={[styles.textInput]}
        placeholder="Search Country"
        selectionColor="black"
        onSubmitEditing={() => console.log("submitted")}
        onChangeText={(text) => {
          setCountryName(text);
        }}
        accessibilityLabel="search input"
        accessibilityHint="input"
        value={countryName}
      />
      <FlatList
        style={{ marginTop: 15 }}
        data={filteredCountriesData}
        keyExtractor={(item) => item.ID}
        renderItem={({ item }) => (
          <TouchableNativeFeedback
            onPress={() => navigation.navigate("Detail", { country: item })}
          >
            <View
              style={{
                height: 50,
                backgroundColor: "white",
                paddingHorizontal: 10,
                marginVertical: 3,
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 20, color: "black" }}>
                {item.Country} ({item.TotalConfirmed})
              </Text>
            </View>
          </TouchableNativeFeedback>
        )}
      />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
  },
  textInput: {
    height: 50,
    borderColor: "#4C4C4D",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
  },
});
