import { useContext, useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Button,
  Text,
  Image,
  SafeAreaView,
} from "react-native";
import api from "../api/Instance";
import { AuthContext } from "../Contexts/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GenericButton } from "../components/GenericButton";
import { SignupModal } from "../components/SignupModal";
const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const response = await api.post("/api/user/token", {
        username,
        password,
      });

      const { accessToken, username: responseUsername } = response.data;
      await AsyncStorage.setItem("accessToken", accessToken);
      login(accessToken, responseUsername);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignup = () => {
    setModalVisible(true);
  };
  const handleCloseModal = () => {
    setModalVisible(false);
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
      <View style={styles.loginWrapper}>
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
            <GenericButton label="Sign-up" onPress={handleSignup} />
          </View>
        </View>
      </View>
      <SignupModal visible={modalVisible} onClose={handleCloseModal} />
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
  loginWrapper: {
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
  buttonContainer: {
    alignItems: "center",
    marginTop: 10,
  },
});

export default LoginScreen;
