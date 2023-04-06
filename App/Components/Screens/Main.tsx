import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import TextC from "../Ui/Core/TextC";
import Ionicons from "@expo/vector-icons/Ionicons";
import { globalFontStyles } from "../../Assets/Styles/fontStyles";

interface MainPageProps {}

const MainPage = (props: MainPageProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.positionSwitchContainer}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <Ionicons name="location" size={24} color="white" />
            <TextC style={{...globalFontStyles.infoText, marginLeft:10}}>Chernihiv</TextC>
        </View>
        <TouchableOpacity>
          <TextC>Click</TextC>
        </TouchableOpacity>
      </View>
      <View style={styles.weatherContainer}>
        <View style={styles.weather}>
          <TextC style={globalFontStyles.h1}>23°</TextC>
        </View>
        <View style={styles.weatherTextContainer}>
          <TextC style={globalFontStyles.infoText}>It's sunny</TextC>
        </View>
      </View>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    paddingTop:'5%'
  },
  positionSwitchContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  weatherContainer: {
    justifyContent: "space-between",
    flexDirection: "column",
  },
  weather: {},
  weatherTextContainer: {
    display: "flex",
    flexDirection: "row",
  },
  weatherText: {
    // transform: [{ rotate: "270deg" }],
    fontSize: 24,
    fontWeight: "300",
  },
 
});
