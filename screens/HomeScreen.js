import { Text, SafeAreaView, View, StyleSheet } from "react-native";
import CustomHeader from "../components/CustomHeader";
import RecipeCard from "../components/RecipeCard";
import { useState, useEffect } from "react";
import { getRecipes } from "../api/getRecipes";
import RecipeModal from "../components/RecipeModal";

function HomeScreen() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  
  useEffect(() => {
    getRecipes(setRecipes);
  }, []);

  const handleRecipePress = (recipe) => {
    setSelectedRecipe(recipe);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader />
      <View style={styles.wrapper}>
        <Text style={styles.text}>New delicious recipes from trusted chefs!</Text>
        <RecipeCard recipes={recipes} onPressRecipe={handleRecipePress} />
      </View>
      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          visible={modalVisible}
          onClose={handleCloseModal}
        />
      )}
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
    alignSelf: "center",
    padding: 10,
    fontFamily: "Kalam-Regular",
    borderTopWidth: 1,
    borderColor: "#000000",
  },
});