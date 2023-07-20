import {
  View,
  Text,
  Modal,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { GenericButton } from "./GenericButton";
import TagFlatList from "./TagFlatList";
import { IngredientMap } from "./IngredientsMap";
import { useState, useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import axios from "axios";

const RecipeModal = ({ recipe, visible, onClose }) => {
  const [likedRecipe, setLikedRecipe] = useState(false);
  const { accessToken } = useContext(AuthContext); // Access the accessToken from the context

  if (!recipe) {
    return null;
  }

  const handleToggleLikedRecipe = async () => {
    try {
      setLikedRecipe(!likedRecipe);

      const apiUrl = likedRecipe
        ? "http://192.168.10.157:5000/api/user/removeLiked"
        : "http://192.168.10.157:5000/api/user/addLiked";
      const response = await axios.put(
        apiUrl,
        { recipeId: recipe._id },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );

      console.log(response.data.message);
    } catch (error) {
      console.error("Error updating liked status:", error);
      console.log("Full error response:", error.response);
    }
  };

  const handleAddToGrocerylist = async () => {
    try {
      const response = await axios.post(
        "http://192.168.10.157:5000/api/user/addToGroceryList",
        {
          ingredients: recipe.ingredients,
          username: "jonathan",
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      // Rest of the code...
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  return (
    <Modal animationType="fade" visible={visible} onRequestClose={onClose}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Image source={{ uri: recipe.image }} style={styles.image} />
        <Text style={styles.ingridentHeader}>Ingredients:</Text>
        <IngredientMap recipe={recipe} />
        <View style={styles.buttonWrapper}>
          <Pressable
            style={[styles.button, styles.moveIconToLeft]}
            onPress={handleAddToGrocerylist}
          >
            <Text style={styles.icon}>
              <MaterialCommunityIcons name="playlist-edit" size={40} />
            </Text>
          </Pressable>

          <Pressable style={styles.button} onPress={handleToggleLikedRecipe}>
            <Text style={styles.icon}>
              <MaterialCommunityIcons
                name={likedRecipe ? "heart-off" : "cards-heart-outline"}
                size={40}
              />
            </Text>
          </Pressable>
        </View>

        <Text>{recipe.text}</Text>
        <Text>{recipe.instructions}</Text>
        <TagFlatList data={recipe.tags}></TagFlatList>

        <GenericButton label={"Go back"} onPress={onClose}></GenericButton>
      </ScrollView>
    </Modal>
  );
};

export default RecipeModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D3D3D3",
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontStyle: "italic",
    fontSize: 28,
    fontWeight: "bold",
    color: "purple",
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

  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "purple",
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
});
