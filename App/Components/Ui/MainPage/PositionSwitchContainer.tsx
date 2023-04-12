import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import TextC from '../Core/TextC';
import Ionicons from "@expo/vector-icons/Ionicons";
import { WeatherRequest } from '../../../Library/Utils/ApiModels/MainApiModel';
import { globalFontStyles } from '../../../Assets/Styles/fontStyles';


interface PositionSwitchProps {
    weatherData:WeatherRequest;
    isBigView:boolean;
    setIsBigView:(value:any)=>void;
}

const PositionSwitch = (props: PositionSwitchProps) => {
  return (
    <View style={styles.positionSwitchContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="location" size={24} color="white" />
          <TextC style={{ ...globalFontStyles.infoText, marginLeft: 10 }}>
            {props.weatherData ? props.weatherData.name : null}
          </TextC>
        </View>
        <TouchableOpacity onPress={() => props.setIsBigView((prev:any) => !prev)}>
          {props.isBigView ? (
            <Ionicons name="reorder-three-outline" size={32} color="white" />
          ) : (
            <Ionicons name="reorder-two-outline" size={32} color="white" />
          )}
        </TouchableOpacity>
      </View>
  );
};

export default PositionSwitch;

const styles = StyleSheet.create({
    positionSwitchContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
      },
});
