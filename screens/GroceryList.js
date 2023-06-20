import { View, Text , SafeAreaView } from "react-native";
import CustomHeader from "../components/CustomHeader";
function GroceryList() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>GroceryList!</Text>
      </View>
    </SafeAreaView>
  );
}

export default GroceryList;
