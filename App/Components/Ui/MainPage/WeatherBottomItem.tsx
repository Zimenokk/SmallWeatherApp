import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import TextC from "../Core/TextC";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Item } from "./BottomSheetModal";
import { primaryGrey } from "../../../Assets/Styles/colorStyles";

interface WeatherBottomItemProps {
  item: Item;
}

const WeatherBottomItem = (props: WeatherBottomItemProps) => {
  const colorSelector = (weatherNumber: number) => {
    if (weatherNumber >= 20) {
      return "#FEC94E";
    } else if (weatherNumber >= 5 && weatherNumber < 20) {
      return "#91C9F0";
    } else if (weatherNumber < 5) {
      return "#6CA3F5";
    }
  };

  const itemStyle = StyleSheet.create({
    itemContainer: {
      minWidth: 80,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      marginRight: 10,
      borderRadius: 20,
      backgroundColor: colorSelector(props.item.weather),
      padding: 10,
    },
  });

  return (
    <View style={itemStyle.itemContainer}>
      <Ionicons name="sunny-outline" size={38} color="white" />
      <TextC style={styles.weatherDate}>{props.item.title}</TextC>
      <TextC style={styles.weatherText}>{props.item.weather}°</TextC>
    </View>
  );
};

export default WeatherBottomItem;

const styles = StyleSheet.create({
  weatherDate: {
    fontSize: 12,
    marginBottom: 8,
    marginTop: 10,
    color:'white'
  },
  weatherText: {
    color:'white',
    fontSize: 40,
    fontWeight: "400",
    marginLeft: 2,
  },
});
