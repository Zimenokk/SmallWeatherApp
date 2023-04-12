import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import TextC from "../Core/TextC";
import { WeatherRequest } from "../../../Library/Utils/ApiModels/MainApiModel";
import { globalFontStyles } from "../../../Assets/Styles/fontStyles";
import { Image } from "expo-image";
import { API_KEY } from "../../../Network/env";


interface HorizontalWeatherProps {
  weatherData: WeatherRequest;
}

const HorizontalWeather = (props: HorizontalWeatherProps) => {

    const link=`https://api.openweathermap.org/data/2.5/weather?q=Chernihiv&units=metric&appid=${API_KEY}`;

  return (
    <View style={styles.horizonrtalWeatherContainer}>
      <View style={styles.weatherTextContainer}>
        {props.weatherData.weather ? (
          <Image style={styles.image} source={link} transition={1000}></Image>
        ) : null}
        <TextC style={{ ...globalFontStyles.infoText, fontSize: 20 }}>
          {props.weatherData ? props.weatherData.weather[0].main : null}
        </TextC>
      </View>
      <View style={styles.weather}>
        <TextC style={{ ...globalFontStyles.h1, fontSize: 98 }}>
          {props.weatherData.main ? Math.floor(props.weatherData.main?.temp) : null}°
        </TextC>
      </View>
    </View>
  );
};

export default HorizontalWeather;

const styles = StyleSheet.create({
  horizonrtalWeatherContainer: {
    marginTop: 15,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  weatherTextContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 16,
  },
  weather: {
    flexDirection: "row",
  },
  image: {
    width: 40,
    height: 40,
    marginBottom: -10,
  },
});
