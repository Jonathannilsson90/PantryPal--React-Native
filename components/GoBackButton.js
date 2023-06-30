import { Pressable, Text, StyleSheet, } from "react-native";
export const GoBackButton = ({onClose={onClose}}) => {
  return (
    <Pressable onPress={onClose} style={styles.goBackButton}>
      <Text style={styles.text}>Go back</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goBackButton: {
    marginTop: 5,
    backgroundColor: "purple",
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
    width: "100%",
    height: "10%",
  },
  text: {
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
  },
});
