import {
  View,
  Text,
  Modal,
  Button,
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import TagFlatList from "./TagFlatList";
import IngredientsFlatList from "./IngredientsFlatList";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const RecipeModal = ({ recipe, visible, onClose }) => {
  if (!recipe) {
    return null;
  }

  return (
    <Modal animationType="fade" visible={visible} onRequestClose={onClose}>
      <Text style={styles.title}>{recipe.title}</Text>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <IngredientsFlatList data={recipe.ingredients} />
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

      <ScrollView>
        <Text>{recipe.text}</Text>
        <Text>{recipe.instructions}</Text>

        <TagFlatList data={recipe.tags}></TagFlatList>
        <Button title="Close" onPress={onClose}></Button>
      </ScrollView>
    </Modal>
  );
};

export default RecipeModal;

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    paddingBottom: 10,
    fontSize: 30,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#90EE90",
    alignSelf: "flex-end",
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
