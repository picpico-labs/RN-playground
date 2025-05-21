import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, View } from "react-native";

export default function Booth() {
  return (
    <View style={styles.container}>
      <View style={styles.canvas} />
      <View style={styles.bottomBar}>
        {["mic", "camera", "timer"].map(item => (
          <MaterialIcons key={item} name={item} size={24} color="black" style={styles.bottomBarItem} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  canvas: {
    width: "100%",
    aspectRatio: 1,
    marginTop: 50,
    backgroundColor: "#f5f5f5",
  },
  bottomBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
    backgroundColor: "#808080",
  },
  bottomBarItem: {
    verticalAlign: "middle",
  },
});
