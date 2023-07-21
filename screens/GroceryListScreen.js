import { View, StyleSheet, SafeAreaView } from "react-native";
import CustomHeader from "../components/CustomHeader";
import RenderGroceryList from "../components/RenderGroceryList";
import { useState, useEffect, useContext, useCallback } from "react";
import api from "../api/Instance";
import { AuthContext } from "../Contexts/AuthContext";
import { useFocusEffect } from "@react-navigation/native";


function GroceryListScreen() {
    const [groceryListData, setGroceryListData] = useState([]);
    const { accessToken, username } = useContext(AuthContext); 
  
    const fetchGroceryListData = async () => {
      
      try {
        const response = await api.get(
          "/api/user/groceryList",
          {
            params: { username },
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        setGroceryListData(response.data)
      } catch (error) {
        console.log("ERROR", error);
      }
    };

    const handleRemoveItem = async (itemId) => {

      try {
        const response = await api.delete(
          `/api/user/deleteGroceryItem/${itemId}`,
          {
            params: { username },
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        setGroceryListData(response.data.groceryList);
      } catch (error) {
        console.log(error);
      }
    };
  
    useFocusEffect(
      useCallback(() => {
        fetchGroceryListData();
        return () => {
  
        };
      }, [fetchGroceryListData])
    );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader />
      <View style={{ flex: 1}}>
      <View style={styles.container}>
      <RenderGroceryList groceryList={groceryListData} onRemoveItem={handleRemoveItem} />
    </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
export default GroceryListScreen;
