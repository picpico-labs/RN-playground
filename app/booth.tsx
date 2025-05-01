import { StyleSheet, Text, View } from "react-native";

export default function Booth() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Booth</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
