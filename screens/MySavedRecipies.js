import { Text, SafeAreaView, View } from "react-native"
import CustomHeader from "../components/CustomHeader";
const MySavedRecipes = () => {
    return (
      <SafeAreaView style={{flex: 1}}>
         <CustomHeader />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>MySavedRecipies!</Text>
        </View>
        </SafeAreaView>
      );
}

export default MySavedRecipes