import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { globalFontStyles } from "../../../Assets/Styles/fontStyles";
import TextC from "../Core/TextC";
import { WeatherRequest } from "../../../Library/Utils/ApiModels/MainApiModel";

interface WeatherContainerProps {
    weatherData:WeatherRequest;
    isBigView:boolean;
}

const WeatherContainer = (props: WeatherContainerProps) => {
  return (
    <View style={styles.weatherContainer}>
      <View style={styles.weather}>
        <TextC style={{ ...globalFontStyles.h1, marginBottom: "-5%" }}>
          {props.weatherData ? Math.floor(props.weatherData.main?.temp) : null}°
        </TextC>
      </View>
      <View style={styles.weatherTextContainer}>
        <TextC style={globalFontStyles.infoText}>
          {props.weatherData.weather ? props.weatherData.weather[0].main : null}
        </TextC>
      </View>
    </View>
  );
};

export default WeatherContainer;

const styles = StyleSheet.create({
    weatherContainer: {
        flexDirection: "column",
      },
      weather: {
        flexDirection: "row",
      },
      weatherTextContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingVertical: 16,
      },
     
});
