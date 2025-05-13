import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Button({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <View style={styles.button}>
      <Pressable onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
