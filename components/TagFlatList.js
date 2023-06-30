import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const TagFlatList = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Text style={styles.tagItem}>{item}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tagItem: {
    borderWidth: 1,
    borderColor: "purple",
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
    backgroundColor: "purple",
    color: "white",
    fontWeight: "bold",
  },
});

export default TagFlatList;