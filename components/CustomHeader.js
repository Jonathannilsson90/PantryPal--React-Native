import { View, Image, TextInput } from "react-native";

function CustomHeader() {
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 40,
        justifyContent: "flex-start"
      }}
    >
      <Image
        source={require("../assets/images/headerImg.png")}
        style={{
          width: 100,
          height: 100,
          marginRight: 8,
          padding: 4,
          borderRadius: 8,
        }}
      />
      <TextInput
        placeholder="Search"
        style={{
          flex: 1,
          height: 40,
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 8,
          paddingRight: 2,
        }}
      />
    </View>
  );
}

export default CustomHeader;
