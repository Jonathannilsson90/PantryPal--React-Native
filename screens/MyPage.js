import { SafeAreaView, Text,View } from "react-native"
import CustomHeader from "../components/CustomHeader";
const MyPage = () => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>MyPage!</Text>
        </View>
        </SafeAreaView>
      );
}

export default MyPage