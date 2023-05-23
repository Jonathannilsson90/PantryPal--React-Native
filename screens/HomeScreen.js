import { Text, View, StyleSheet } from "react-native";
import CustomHeader from "../components/CustomHeader";
import RecipeCard from "../components/RecipeCard";


function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader />
      <View>
        <Text style={styles.text} >New delicious recipes from trusted chefs!</Text>
        <RecipeCard />
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    alignSelf: "center",
    padding: 10,
    fontFamily: "Kalam-Regular",
    borderTopWidth: 1,
    borderColor: "#000000"
  },
});
