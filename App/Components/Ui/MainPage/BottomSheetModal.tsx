import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import TextC from "../Core/TextC";
import { globalFontStyles } from "../../../Assets/Styles/fontStyles";
import WeatherBottomItem from "./WeatherBottomItem";
import { FlatList } from "react-native-gesture-handler";
import { useState } from "react";
import {
  List,
  WeatherDateHourly,
} from "../../../Library/Utils/ApiModels/MainApiModel";

interface BottomSheetModalProps {
  data: WeatherDateHourly;
}
export type Item = {
  title: string;
  weather: number;
};

const BottomSheetModal = (props: BottomSheetModalProps) => {
  const [weatherData, setWeatherData] = useState([
    { title: "1", weather: 20 },
    { title: "2", weather: 9 },
    { title: "3", weather: 5 },
    { title: "4", weather: 0 },
    { title: "4", weather: 0 },
    { title: "4", weather: 0 },
    { title: "4", weather: 0 },
  ]);
  const renderWeatherItem = (item: List) => {
    return <WeatherBottomItem item={item} />;
  };
  return (
    <View style={styles.container}>
      <TextC
        style={{
          textAlign: "center",
          ...globalFontStyles.titleText,
          fontSize: 18,
        }}
      >
        Weather for 3 days
      </TextC>
      <View style={{ paddingTop: "5%", minHeight:'70%'}}>
        <FlatList
          style={{ maxHeight:'100%'}}
          data={props.data.list}
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
    paddingVertical: 20,
    paddingLeft: 10,
    // paddingRight:0,
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
  },
});
