import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import MyPage from "../screens/MyPage";
import MySavedRecipes from "../screens/MySavedRecipies";
import GroceryList from "../screens/GroceryList";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();
function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{ header: () => null }}>
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
        component={GroceryList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="note-edit"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Saved recipes"
        component={MySavedRecipes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="content-save-check"
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
