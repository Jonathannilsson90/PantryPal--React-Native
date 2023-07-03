import { useState } from "react";
import {
  View,
  Image,
  TextInput,
  Pressable,
  Modal,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import RecipeCard from "./RecipeCard";
import api from "../api/Instance";
import { GenericButton } from "./GenericButton";
function CustomHeader() {
  const [modal, setModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!searchText) {
      return;
    }

    try {
      const response = await api.get("/api/search", {
        params: { query: searchText },
      });
      const recipes = response.data;
      setSearchResult(recipes);
      setError(null);
      setSearchText("");
    } catch (error) {
      setError("No such recipe in our database");
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 40,
        justifyContent: "space-between",
      }}
    >
      <Image
        source={require("../assets/images/headerImg.png")}
        style={{
          width: 50,
          height: 50,
          marginRight: 8,
          padding: 4,
          borderRadius: 8,
        }}
      />
      <Text style={{ fontFamily: "Yellowtail-Regular", fontSize: 30 }}>
        Pantry Pal{" "}
      </Text>
      <Pressable onPress={() => setModal(true)}>
        <MaterialCommunityIcons name="magnify" size={30} />
      </Pressable>

      <Modal
        style={{ flex: 1 }}
        visible={modal}
        onRequestClose={() => setModal(false)}
      >
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TextInput
            placeholder="Search for your favorite meal"
            style={{
              flex: 1,
              height: 40,
              borderBottomWidth: 1,
              borderColor: "purple",
              paddingHorizontal: 8,
              paddingRight: 2,
            }}
            onSubmitEditing={handleSearch}
            value={searchText}
            onChangeText={setSearchText}
          />

          <Pressable
            style={{
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              width: 100,
              height: 40,
              borderRadius: 5,
            }}
            onPress={handleSearch}
          >
            <Text style={{ fontWeight: "bold", color: "purple" }}>Search</Text>
          </Pressable>
        </View>

        {error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : (
          <RecipeCard recipes={searchResult} />
        )}
        <GenericButton label="Go back" onPress={() => setModal(false)} />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    textAlign: "center",
    fontSize: 30,
    color: "purple",
  },
});

export default CustomHeader;
