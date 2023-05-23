import { useState } from "react";
import { View, Image, TextInput, Pressable, Modal, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
function CustomHeader() {
  const [modal, setModal] = useState(false);

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
      <Text style={{fontFamily: "Yellowtail-Regular", fontSize:30,}}>Pantry Pal  </Text>
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
          <Pressable
            style={{
              backgroundColor: "#87CEEB",
              alignItems: "center",
              justifyContent: "center",
              width: 100,
              height: 40,
              borderRadius: 5,
            }}
            onPress={() => setModal(false)}
          >
            <Text style={{fontWeight: "bold"}}>Go back</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

export default CustomHeader;
