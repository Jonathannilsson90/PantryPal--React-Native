import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Pressable } from "react-native";
export const ClearTextIcon = ({searchText, setSearchText}) => {
const clearInput = () => {
    setSearchText("")
}
if(searchText === ""){
    return null;
}

return(
<Pressable onPress={clearInput}>
<MaterialCommunityIcons name="close-circle" size={30} color={"grey"} />
</Pressable>)
}