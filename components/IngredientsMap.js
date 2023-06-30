import { View, Text, StyleSheet } from "react-native"

export const IngredientMap = ({recipe}) => {
    return(
        <>
        {recipe.ingredients.map((item, index) => (
            <View key={index} style={styles.ingredientItem}>
          <Text style={styles.amount}>{item.amount}</Text>
          <Text>{item.ingredient}</Text>
        </View>
      ))}
      </>)
}

const styles = StyleSheet.create({
    ingredientItem: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 8,
        borderWidth: 2,
        borderColor: "white",
        backgroundColor: "white",
        borderRadius: 5,
      },
      amount: {
        marginRight: 10,
        fontWeight: "bold",
      },
})