import { useState } from "react";
import { View, Image, TextInput, Pressable, Modal, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import RecipeCard from "./RecipeCard";
import api from "../api/Instance";

function CustomHeader() {
  const [modal, setModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await api.get("/api/search", {
        params: { query: searchText },
      });
      const recipes = response.data;
      setSearchResult(recipes);
      setError(null);
    } catch (error) {
      console.error(error);
      setError("An error occurred while searching for recipes.");
    }
  };

  return (
    <View
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
      <Pressable onPress={() => setModal(true)} style={{}}>
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
            onPress={() => setModal(false)}
          >
            <Text style={{ fontWeight: "bold", color: "purple" }}>Go back</Text>
          </Pressable>
        </View>
        {error ? (
          <Text>{error}</Text>
        ) : (
          searchResult.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))
        )}
      </Modal>
    </View>
  );
}

export default CustomHeader;
