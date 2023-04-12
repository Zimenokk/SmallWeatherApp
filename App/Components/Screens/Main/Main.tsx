import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
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
import PositionSwitch from "../../Ui/MainPage/PositionSwitchContainer";
import WeatherContainer from "../../Ui/MainPage/WeatherContainer";
import HorizontalWeather from "../../Ui/MainPage/HorizontalWeather";
import AdditionalInfo from "../../Ui/MainPage/AdittionalInfo";

interface MainPageProps {}

const MainPage = (props: MainPageProps) => {
  useEffect(() => {
    getWeatherData();
  }, []);

  const [weatherData, setWeatherData] = useState<WeatherRequest>(
    {} as WeatherRequest
  );

  const [weatherDataHourly, setWeatherDataHourly] = useState<WeatherDateHourly>(
    {} as WeatherDateHourly
  );

  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isLoading, setIsLoading] = useState(false);
  const snapPoints = ["35%", "36%"];
  const [isBigView, setIsBigView] = useState(true);

  const link = `https://api.openweathermap.org/data/2.5/weather?q=Chernihiv&units=metric&appid=${API_KEY}`;

  const [weatherByHourLink, setWeatherByHourLink] = useState(
    `https://api.openweathermap.org/data/2.5/forecast?q=Chernihiv&units=metric&appid=${API_KEY}`
  );

  useEffect(() => {}, [weatherDataHourly]);

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
      <PositionSwitch
        weatherData={weatherData}
        isBigView={isBigView}
        setIsBigView={setIsBigView}
      />
      {isBigView ? (
        <WeatherContainer weatherData={weatherData} isBigView={isBigView} />
      ) : (
        <HorizontalWeather weatherData={weatherData} />
      )}
      <View
        style={{ borderTopWidth: 2, borderTopColor: "white", height: 2 }}
      ></View>
      <AdditionalInfo weatherData={weatherData} />
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

  weatherContainer: {
    flexDirection: "column",
  },
});
