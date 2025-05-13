import { StyleSheet, View } from "react-native";
import Button from "../components/Button";

export default function Index() {
  return (
    <View style={styles.container}>
      <Button label="Welcome PICPICO" />
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
});
