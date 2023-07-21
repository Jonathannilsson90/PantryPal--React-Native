import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import MyPage from "../screens/MyPage";
import MySavedRecipes from "../screens/MySavedRecipies";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import GroceryListScreen from "../screens/GroceryListScreen";

const Tab = createBottomTabNavigator();
function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{ header: () => null, tabBarActiveTintColor: "purple" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Grocery List"
        component={GroceryListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="playlist-edit"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Liked recipes"
        component={MySavedRecipes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cards-heart-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="My page"
        component={MyPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTab;
