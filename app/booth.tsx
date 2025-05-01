import { StyleSheet, View } from "react-native";

export default function Booth() {
  return (
    <View style={styles.container}>
      <View style={styles.screen} />
      <View style={styles.bottomBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "space-between",
  },
  screen: {
    marginTop: 50,
    marginHorizontal: 20,
    height: 400,
    backgroundColor: "#fff",
  },
  bottomBar: {
    width: "100%",
    height: 70,
    backgroundColor: "#fff",
  },
});
