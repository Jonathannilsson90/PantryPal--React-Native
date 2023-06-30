import api from "./Instance";

export const getRecipes = async (setRecipes) => {
    try {
      const response = await api.get("/api/recipes");
      setRecipes(response.data);
    } catch (error) {
      console.error(error);
    }
  };