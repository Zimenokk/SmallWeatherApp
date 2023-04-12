import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TextC from '../Core/TextC';
import { globalFontStyles } from '../../../Assets/Styles/fontStyles';
import { WeatherRequest } from '../../../Library/Utils/ApiModels/MainApiModel';
import Ionicons from "@expo/vector-icons/Ionicons";


interface AdditionalInfoProps {
  weatherData: WeatherRequest;
    
}

const AdditionalInfo = (props: AdditionalInfoProps) => {
  return (
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
            {props.weatherData.main ? Math.floor(props.weatherData.main.feels_like) : null}°
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
            {props.weatherData.main ? Math.floor(props.weatherData.main.temp_min) : null}°
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
            {props.weatherData.main ? Math.floor(props.weatherData.main.temp_max) : null}°
          </TextC>
        </View>
      </View>
  );
};

export default AdditionalInfo;

const styles = StyleSheet.create({
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
});
