import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Layout from "./App/Components/Layout/Layout";
import MainPage from "./App/Components/Screens/Main/Main";

export default function App() {
  return (
    <Layout>
      <MainPage/>
    </Layout>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
