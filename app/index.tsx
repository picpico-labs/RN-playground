import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import Button from "../components/Button";

export default function Index() {
  const onPress = () => {
    router.push("/booth");
  };

  return (
    <View style={styles.container}>
      <Button label="Welcome PICPICO" onPress={onPress} />
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
