import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import RecipeCard from './RecipeCard';
import api from '../api/Instance';
function RecipeSearch() {
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await api.get('/api/search', { params: { query: searchText } });
      const recipes = response.data;
      setSearchResult(recipes);
      setError(null);
    } catch (error) {
      console.error(error);
      setError('An error occurred while searching for recipes.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Search recipes"
        value={searchText}
        onChangeText={setSearchText}
      />
      <Button title="Search" onPress={handleSearch} />
      {/* Display the search results */}
      {error ? (
        <Text>{error}</Text>
      ) : (
        searchResult.map(recipe => <RecipeCard key={recipe._id} recipe={recipe} />)
      )}
    </View>
  );
}

export default RecipeSearch;