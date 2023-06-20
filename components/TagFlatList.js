import { FlatList, StyleSheet, Text } from "react-native";
const TagFlatList = ({data}) => {
  return(
  <FlatList
    data={data}
    renderItem={({ item }) => (
      <Text style={[styles.tags, styles.tagItem]}>{item}</Text>
    )}
    keyExtractor={(item) => item.toString()}
    horizontal
  />
  )
};

export default TagFlatList;


const styles = StyleSheet.create({
      tagItem: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#000000",
        padding: 5,
        borderRadius: 5,
        marginRight: 5,
      },

})
