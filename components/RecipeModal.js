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

const RecipeModal = ({ recipe, visible, onClose }) => {
  if (!recipe) {
    return null;
  }

const handleLikedRecipe = () => {

}
const handleAddToGrocerylist = () => {

}


  return (
    <Modal animationType="fade" visible={visible} onRequestClose={onClose}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Image source={{ uri: recipe.image }} style={styles.image} />
        <Text style={styles.ingridentHeader}>Ingredients:</Text>
        <IngredientMap recipe={recipe} />
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
