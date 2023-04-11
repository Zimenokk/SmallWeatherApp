import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Dimensions, ImageBackground, SafeAreaView, View } from "react-native";
import { Text, StyleSheet } from "react-native";
import { Image } from "expo-image";


interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <Image
      style={styles.image}
      source="https://picsum.photos/seed/696/3000/2000"
      contentFit="cover"
      transition={1000}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <View style={styles.container}>{props.children}</View>
      </SafeAreaView>
    </Image>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex:1,
    // paddingHorizontal: 20,
    minHeight: Dimensions.get("screen").height,
    minWidth: Dimensions.get("screen").width,
  },
  image:{
    width: '100%',
    height:'100%',
  }
});
