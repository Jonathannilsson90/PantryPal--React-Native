import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const RecipeModal = ({ recipe, visible, onClose }) => {
  if (!recipe) {
    return null;
  }

  return (
    <Modal animationType="fade" visible={visible} onRequestClose={onClose}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Image source={{ uri: recipe.image }} style={styles.image} />

        <Text style={styles.ingridentHeader}>Ingredients:</Text>
        {recipe.ingredients.map((item, index) => (
          <View key={index} style={styles.ingredientItem}>
            <Text style={styles.amount}>{item.amount}</Text>
            <Text>{item.ingredient}</Text>
          </View>
        ))}

        <View style={styles.buttonWrapper}>
          <Pressable style={[styles.button, styles.moveIconToLeft]}>
            <Text style={styles.icon}>
              <MaterialCommunityIcons name="playlist-edit" size={40} />
            </Text>
          </Pressable>

          <Pressable style={styles.button}>
            <Text style={styles.icon}>
              <MaterialCommunityIcons name="cards-heart-outline" size={40} />
            </Text>
          </Pressable>
        </View>

        <Text>{recipe.text}</Text>
        <Text>{recipe.instructions}</Text>

        <View style={styles.tagWrapper}>
          {recipe.tags.map((tag, index) => (
            <Text style={[styles.tags, styles.tagItem]} key={index}>
              {tag}
            </Text>
          ))}
        </View>
        <Pressable
          onPress={onClose}
          style={[styles.button, styles.goBackButton]}
        >
          <Text style={styles.text}>Go back</Text>
        </Pressable>
      </ScrollView>
    </Modal>
  );
};

export default RecipeModal;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#90EE90",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  ingridentHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    textDecorationLine: "underline",
  },
  ingredientItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  amount: {
    marginRight: 10,
    fontWeight: "bold",
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#90EE90",
    maxWidth: 140,
    height: 40,
    borderRadius: 5,
    marginRight: 10,
  },
  icon: {
    textAlign: "center",
    lineHeight: 40,
    color: "white",
  },
  moveIconToLeft: {
    marginRight: 40,
  },
  tagWrapper: {
    margintop: 10,
    flexDirection: "row",
  },
  tagItem: {
    backgroundColor: "#90EE90",
    color: "white",
    fontWeight: "bold",
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
  },

  goBackButton: {
    textAlign: "center",
  },
});
