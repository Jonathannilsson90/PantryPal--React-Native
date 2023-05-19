import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
const MOCKDATA = [
  { id: "1", title: "Card 1" },
  { id: "2", title: "Card 2" },
  { id: "3", title: "Card 3" },
  { id: "4", title: "Card 4" },
  { id: "5", title: "Card 5" },
  { id: "6", title: "Card 6" },
  { id: "7", title: "Card 7" },
  { id: "8", title: "Card 8" },
];

const numColumns = 2;
const screenWidth = Dimensions.get("window").width;
const itemWidth = screenWidth / numColumns;

const renderCard = ({ item }) => (
  <View style={styles.item}>
    <Text>{item.title}</Text>
  </View>
);

function RecipeCard() {
  return (
    <FlatList
      data={MOCKDATA}
      renderItem={renderCard}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    width: itemWidth,
    height: 200,
    justifycontent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
  },
});

export default RecipeCard;
