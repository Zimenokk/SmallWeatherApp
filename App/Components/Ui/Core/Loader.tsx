import * as React from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";

interface LoaderProps {}

const Loader = (props: LoaderProps) => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <ActivityIndicator size={"large"} color={"white"} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {},
});
