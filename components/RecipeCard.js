import { View, Text, FlatList, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import TagFlatList from "./TagFlatList";

const RecipeCard = ({ recipes, onPressRecipe }) => {
  const renderCard = ({ item }) => {
    const words = item.text.split(" ");
    const maxWords = 20;
    const editedText = words.slice(0, maxWords).join(" ");

    return (
      <Pressable onPress={() => onPressRecipe(item)}>
        <View style={styles.card}>
          <View style={styles.imageWrapper}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{editedText}...</Text>
            <TagFlatList data={item.tags} />
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={recipes}
      renderItem={renderCard}
      keyExtractor={(item) => item._id}
      contentContainerStyle={styles.flatListContent}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginVertical: 10,
  },
  imageWrapper: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  contentWrapper: {
    flex: 2,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    marginVertical: 5,
  },
  flatListContent: {
    paddingHorizontal: 10,
  },
});

export default RecipeCard;
