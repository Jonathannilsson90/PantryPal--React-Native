import { Pressable, Text, StyleSheet } from "react-native";
export const GenericButton = ({ onPress, label }) => {
  return (
    <Pressable onPress={onPress} style={styles.genericButton}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  genericButton: {
    margin: 5,
    backgroundColor: "purple",
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
    width: "100%",
    height: 35,
  },
  text: {
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
  },
});
