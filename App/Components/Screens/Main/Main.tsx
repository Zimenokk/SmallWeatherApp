import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import TextC from "../../Ui/Core/TextC";
import Ionicons from "@expo/vector-icons/Ionicons";
import { globalFontStyles } from "../../../Assets/Styles/fontStyles";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useMemo, useRef, useState } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import BottomSheetModal from "../../Ui/MainPage/BottomSheetModal";
import { getData } from "../../../Network/Actions";
import {
  WeatherDateHourly,
  WeatherRequest,
} from "../../../Library/Utils/ApiModels/MainApiModel";
import { API_KEY } from "../../../Network/env";
import Loader from "../../Ui/Core/Loader";
import { Image } from "expo-image";

interface MainPageProps {}

const MainPage = (props: MainPageProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isLoading, setIsLoading] = useState(false);
  const snapPoints = ["35%", "37%"];
  const [isBigView, setIsBigView] = useState(true);
  const [weatherData, setWeatherData] = useState<WeatherRequest>(
    {} as WeatherRequest
  );
  const [weatherDataHourly, setWeatherDataHourly] = useState<WeatherDateHourly>(
    {} as WeatherDateHourly
  );

  useEffect(() => {
    getWeatherData();
  }, []);

  const link = `https://api.openweathermap.org/data/2.5/weather?q=Chernihiv&units=metric&appid=${API_KEY}`;
  const weatherByHourLink = `https://api.openweathermap.org/data/2.5/forecast?q=Chernihiv&units=metric&appid=${API_KEY}`;
  let weatherIconLink: string = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

  const getWeatherData = async () => {
    setIsLoading(true);
    try {
      await getData(link).then((res) => setWeatherData(res));
      await getData(weatherByHourLink).then((res) => setWeatherDataHourly(res));
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <Loader />
  ) : (
    <View style={styles.container}>
      <View style={styles.positionSwitchContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="location" size={24} color="white" />
          <TextC style={{ ...globalFontStyles.infoText, marginLeft: 10 }}>
            {weatherData ? weatherData.name : null}
          </TextC>
        </View>
        <TouchableOpacity onPress={() => setIsBigView((prev) => !prev)}>
          {isBigView ? (
            <Ionicons name="reorder-three-outline" size={32} color="white" />
          ) : (
            <Ionicons name="reorder-two-outline" size={32} color="white" />
          )}
        </TouchableOpacity>
      </View>
      {isBigView ? (
        <View style={styles.weatherContainer}>
          <View style={styles.weather}>
            <TextC style={{ ...globalFontStyles.h1, marginBottom: "-5%" }}>
              {weatherData ? Math.floor(weatherData.main?.temp) : null}°
            </TextC>
            <Image
              style={styles.bigWeatherIcon}
              source={weatherIconLink}
              transition={1000}
            ></Image>
          </View>
          <View style={styles.weatherTextContainer}>
            <TextC style={globalFontStyles.infoText}>
              {weatherData.weather ? weatherData.weather[0].main : null}
            </TextC>
          </View>
        </View>
      ) : (
        <View style={styles.horizonrtalWeatherContainer}>
          <View style={styles.weatherTextContainer}>
            {weatherData ? (
              <Image
                style={styles.image}
                source={link}
                transition={1000}
              ></Image>
            ) : null}
            <TextC style={{ ...globalFontStyles.infoText, fontSize: 20 }}>
              {weatherData ? weatherData.weather[0].main : null}
            </TextC>
          </View>
          <View style={styles.weather}>
            <TextC style={{ ...globalFontStyles.h1, fontSize: 98 }}>
              {weatherData.main ? Math.floor(weatherData.main?.temp) : null}°
            </TextC>
          </View>
        </View>
      )}
      <View
        style={{ borderTopWidth: 2, borderTopColor: "white", height: 2 }}
      ></View>
      <View style={styles.additionalInfoContainer}>
        <View style={styles.additionalInfoItem}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextC
              style={{
                ...globalFontStyles.infoText,
                fontSize: 18,
                fontWeight: "bold",
                marginRight: 10,
              }}
            >
              Feels like
            </TextC>
            <Ionicons name="skull-outline" size={26} color="white" />
          </View>
          <TextC
            style={{
              ...globalFontStyles.infoText,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {weatherData.main ? Math.floor(weatherData.main.feels_like) : null}°
          </TextC>
        </View>
        <View style={styles.additionalInfoItem}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextC
              style={{
                ...globalFontStyles.infoText,
                fontSize: 18,
                fontWeight: "bold",
                marginRight: 10,
              }}
            >
              Min
            </TextC>
            <Ionicons name="chevron-down-outline" size={26} color="white" />
          </View>
          <TextC
            style={{
              ...globalFontStyles.infoText,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {weatherData.main ? Math.floor(weatherData.main.temp_min) : null}°
          </TextC>
        </View>
        <View style={styles.additionalInfoItem}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextC
              style={{
                ...globalFontStyles.infoText,
                fontSize: 18,
                fontWeight: "bold",
                marginRight: 10,
              }}
            >
              Max
            </TextC>
            <Ionicons name="chevron-up-outline" size={26} color="white" />
          </View>
          <TextC
            style={{
              ...globalFontStyles.infoText,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {weatherData.main ? Math.floor(weatherData.main.temp_max) : null}°
          </TextC>
        </View>
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        backgroundStyle={{ height: "100%" }}
      >
        <BottomSheetView>
          <BottomSheetModal data={weatherDataHourly} />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    paddingTop: "5%",
    flex: 1,
    paddingHorizontal: 20,
  },
  positionSwitchContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
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
  weatherText: {
    // transform: [{ rotate: "270deg" }],
    fontSize: 24,
    fontWeight: "300",
  },
  gradient: {
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 24,
    color: "white",
  },
  horizonrtalWeatherContainer: {
    marginTop: 15,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  additionalInfoContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },
  additionalInfoItem: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
  image: {
    width: 40,
    height: 40,
    marginBottom: -10,
  },
  bigWeatherIcon:{
    width: 60,
    height: 60,
    marginTop:'5%'
  }
});
