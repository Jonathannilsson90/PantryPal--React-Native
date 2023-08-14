import { SafeAreaView, Text,View } from "react-native"
import CustomHeader from "../components/CustomHeader";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Button } from "react-native";

const MyPage = () => {
  const {logout} = useContext(AuthContext)
  
  const handleLogout = () => {
    logout();}  
  
  return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Logout" onPress={handleLogout} />
        </View>
        </SafeAreaView>
      );
}

export default MyPage