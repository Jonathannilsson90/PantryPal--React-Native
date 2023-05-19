import { Text, View } from "react-native"
import CustomHeader from "../components/CustomHeader";
import RecipeCard from "../components/RecipeCard";
function HomeScreen() {
    return (
      <View style={{flex: 1}}>
        <CustomHeader/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <RecipeCard/>
      </View>
      </View>
    );
  }

export default HomeScreen