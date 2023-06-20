import { FlatList, View, Text, StyleSheet } from "react-native";

const IngredientsFlatList = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.tableRow}>
          <Text style={styles.amount}>{item.amount}</Text>
          <Text style={styles.ingredient}>{item.ingredient}</Text>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
export default IngredientsFlatList;

const styles = StyleSheet.create({
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  amount: {
    marginRight: 10,
    fontWeight: "bold",
  },
  ingredient: {
    flex: 1,
  },
});
