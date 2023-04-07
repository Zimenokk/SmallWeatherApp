import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import TextC from "../../Ui/Core/TextC";
import Ionicons from "@expo/vector-icons/Ionicons";
import { globalFontStyles } from "../../../Assets/Styles/fontStyles";
import { LinearGradient } from "expo-linear-gradient";
import { useMemo, useRef, useState } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import BottomSheetModal from "../../Ui/MainPage/BottomSheetModal";

interface MainPageProps {}

const MainPage = (props: MainPageProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  //   const snapPoints = useMemo(() => ["45%", "50%"], []);
  const snapPoints = ["35%", "37%"];
  const [isBigView, setIsBigView] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.positionSwitchContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="location" size={24} color="white" />
          <TextC style={{ ...globalFontStyles.infoText, marginLeft: 10 }}>
            Chernihiv
          </TextC>
        </View>
        <TouchableOpacity onPress={() => setIsBigView((prev) => !prev)}>
          {
            isBigView ? <Ionicons name="reorder-three-outline" size={32} color="white" /> : 
            <Ionicons name="reorder-two-outline" size={32} color="white" />
          }
        </TouchableOpacity>
      </View>
      {isBigView ? (
        <View style={styles.weatherContainer}>
          <View style={styles.weather}>
            <TextC style={{ ...globalFontStyles.h1}}>23°</TextC>
          </View>
          <View style={styles.weatherTextContainer}>
            <TextC style={globalFontStyles.infoText}>It's sunny</TextC>
          </View>
        </View>
      ) : (
        <View style={styles.horizonrtalWeatherContainer}>
          <View style={styles.weatherTextContainer}>
            <Ionicons name="sunny-outline" size={52} color="white" />
            <TextC style={{...globalFontStyles.infoText, fontSize:20}}>It's sunny</TextC>
          </View>
          <View style={styles.weather}>
            <TextC style={{ ...globalFontStyles.h1, fontSize: 98 }}>23°</TextC>
          </View>
        </View>
      )}
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        backgroundStyle={{ height: "100%" }}
      >
        <BottomSheetView>
          <BottomSheetModal />
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
  weather: {},
  weatherTextContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent:'space-between',
    paddingVertical:16,
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
    marginTop:15,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
