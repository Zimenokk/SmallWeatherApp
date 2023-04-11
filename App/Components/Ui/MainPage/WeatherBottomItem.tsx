import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import TextC from "../Core/TextC";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Item } from "./BottomSheetModal";
import { primaryGrey } from "../../../Assets/Styles/colorStyles";
import { List } from "../../../Library/Utils/ApiModels/MainApiModel";
import { formatDateTime } from "../../../Library/Utils/dateFormatter/formatFate";
import {Image} from 'expo-image'

interface WeatherBottomItemProps {
  item: List;
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
      backgroundColor: colorSelector(props.item.main.temp),
      padding: 10,
    },
  });
  let link: string = `http://openweathermap.org/img/w/${props.item.weather[0].icon}.png`
  return (
    <View style={itemStyle.itemContainer}>
      <Image
      style={styles.image}
      source={link}
      transition={1000}
    ></Image>
      <TextC style={styles.weatherDate}>{formatDateTime(props.item.dt_txt)}</TextC>
      <TextC style={styles.weatherText}>{Math.floor(props.item.main.temp)}°</TextC>
    </View>
  );
};

export default WeatherBottomItem;

const styles = StyleSheet.create({
  weatherDate: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 10,
    color:'white'
  },
  weatherText: {
    color:'white',
    fontSize: 34,
    fontWeight: "400",
    marginLeft: 2,
  },
  image:{
    width:40,
    height:40,
    marginBottom:-10
  }
});
