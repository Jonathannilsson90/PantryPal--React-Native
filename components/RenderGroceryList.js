import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const RenderGroceryList = ({ groceryList, onRemoveItem }) => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.amountText}>{item.amount}</Text>
      <Text style={styles.ingredientText}>{item.ingredient}</Text>
      <TouchableOpacity onPress={() => onRemoveItem(item._id)}>
        <MaterialCommunityIcons name="trash-can-outline" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={groceryList}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  amountText:{
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left"
  },
  ingredientText: {
    flex: 2,
    fontSize: 16,
    textAlign: "left"
  }
});

export default RenderGroceryList;
