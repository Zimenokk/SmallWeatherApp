import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import TextC from "../Core/TextC";
import { globalFontStyles } from "../../../Assets/Styles/fontStyles";
import WeatherBottomItem from "./WeatherBottomItem";
import { FlatList } from "react-native-gesture-handler";
import { useState } from "react";

interface BottomSheetModalProps {}
export type Item = {
  title: string;
  weather:number
};

const BottomSheetModal = (props: BottomSheetModalProps) => {
  const [weatherData, setWeatherData] = useState([
    { title: "1", weather:20 },
    { title: "2" , weather:9},
    { title: "3", weather:5},
    { title: "4", weather: 0},
    { title: "4", weather: 0},
    { title: "4", weather: 0},
    { title: "4", weather: 0},
  ]);
  const renderWeatherItem = (item: Item) => {
    return <WeatherBottomItem item={item} />;
  };
  return (
    <View style={styles.container}>
      <TextC style={{ textAlign: "center", ...globalFontStyles.titleText, fontSize:18 }}>
        Weather Today
      </TextC>
      <View style={{paddingTop:'10%'}}>
        <FlatList
          style={{}}
          data={weatherData}
          renderItem={({ item }) => renderWeatherItem(item)}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default BottomSheetModal;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
  },
});
