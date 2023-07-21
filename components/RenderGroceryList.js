import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const RenderGroceryList = ({ groceryList, onRemoveItem }) => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.amount}</Text>
      <Text>{item.ingredient}</Text>
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
});

export default RenderGroceryList;
