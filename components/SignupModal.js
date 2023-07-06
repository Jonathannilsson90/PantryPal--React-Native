import { Modal, Text, TextInput, StyleSheet, View, Alert } from "react-native";
import { GenericButton } from "./GenericButton";
import { useState } from "react";
import api from "../api/Instance";
import { useTheme } from "@react-navigation/native";

export const SignupModal = ({ visible, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [registrationSuccessful, setRegstrationSuccessful] = useState(false);
  const [ welcomeUsername, setWelcomeUsername ] = useState("");
  
  
  const sendSignup = async () => {
    if (password.length > 0 && repeatedPassword.length > 0) {
      if (password === repeatedPassword) {
        const response = await api.post("/api/user/register", {
          username,
          password,
        });
        setUsername("");
        setPassword("");
        setRepeatedPassword("");
        setPasswordMatch(true);
        setRegstrationSuccessful(true);
        setWelcomeUsername(username);
      }
    } else {
      setPasswordMatch(false);
      setRegstrationSuccessful(false);
    }
  };

  return (
    <Modal visible={visible}>
      {registrationSuccessful ? (
        <>
          <Text style={styles.success}>Registration Successful!</Text>
          <Text style={styles.success}>Welcome, {welcomeUsername}</Text>
        </>
      ) : (
        <>
          <Text style={styles.header}>
            To register please fill a username and password:
          </Text>
        </>
      )}

      <View style={styles.loginWrapper}>
        <Text style={styles.inputText}>Username:</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.inputText}>Password:</Text>
        {!passwordMatch && <Text style={styles.error}>Password do not match</Text>}
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.inputText}>Repeated Password:</Text>
        {!passwordMatch && <Text style={styles.error}>Password do not match</Text>}
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          value={repeatedPassword}
          onChangeText={setRepeatedPassword}
        />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <GenericButton label="Go back" onPress={onClose}></GenericButton>
          <GenericButton label="Sign up" onPress={sendSignup}></GenericButton>
        </View>
      </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    paddingBottom: 20,
    fontStyle: "italic",
    paddingHorizontal: 20,
  },
  loginWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  inputText: {
    alignSelf: "flex-start",
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
  error:{
    color: "red"
  },
  success:{
    color: "green",
    fontSize: 20,
    fontStyle: "italic",
    paddingHorizontal: 20,
  }
});
