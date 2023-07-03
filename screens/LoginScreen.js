import { useContext, useState } from "react";
import { TextInput, View, StyleSheet, Button, Text, Image, SafeAreaView } from "react-native";
import api from "../api/Instance";
import { AuthContext } from "../Contexts/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GenericButton } from "../components/GenericButton";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const response = await api.post("/api/user/token", {
        username,
        password,
      });

      const { accessToken } = response.data;
      await AsyncStorage.setItem("accessToken", accessToken);
      login(accessToken);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Image
        source={require("../assets/images/headerImg.png")}
        style={styles.logo}
      />
      <Text style={styles.welcomeText}>Welcome to Pantry Pal!{"  "}</Text>
      <Text style={styles.sloganText}>
        Sign-up today and enjoy recipes from trusted chefs!
      </Text>
      <View style={styles.loginwrapper}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
      <View style={styles.buttonContainer}>
     <View style={styles.buttonWrapper}>
  <GenericButton label="Login" onPress={handleLogin} />
  <GenericButton label="Sign-up" onPress={handleLogin} />
</View>
      </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    alignSelf: "center",
  },
  welcomeText: {
    alignSelf: "center",
    fontFamily: "Yellowtail-Regular",
    fontSize: 30,
  },
  sloganText: {
    alignSelf: "center",
    fontFamily: "Kalam-Regular",
    fontSize: 16,
  },
  loginwrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    paddingHorizontal: 20,
  },
  buttonContainer:{
    alignItems: "center",
    marginTop: 10,
  }
 
});

export default LoginScreen;
