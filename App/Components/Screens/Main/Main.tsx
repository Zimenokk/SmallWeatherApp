import * as React from "react";
import { View, StyleSheet, Alert } from "react-native";
import {useRef, useState } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import BottomSheetModal from "../../Ui/MainPage/BottomSheetModal";
import Loader from "../../Ui/Core/Loader";
import PositionSwitch from "../../Ui/MainPage/PositionSwitchContainer";
import WeatherContainer from "../../Ui/MainPage/WeatherContainer";
import HorizontalWeather from "../../Ui/MainPage/HorizontalWeather";
import AdditionalInfo from "../../Ui/MainPage/AdittionalInfo";
import { UseGetWeatherOutput, useGetWeather } from "../../../Library/Hooks/useGetWeather";

interface MainPageProps {}

const MainPage = (props: MainPageProps) => {
  let [isLoading, weatherData, weatherDataHourly, error]:UseGetWeatherOutput = useGetWeather();


  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = ["35%", "36%"];
  const [isBigView, setIsBigView] = useState(true);


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
