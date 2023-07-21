import BottomTab from './components/BottomTab';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState, useContext } from 'react';
import { loadFonts } from './fonts';
import { AuthContext, AuthProvider } from './Contexts/AuthContext';
import LoginScreen from './screens/LoginScreen';

const AppContent = () => {
  const { accessToken, username } = useContext(AuthContext);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  console.log("Context accessToken:", accessToken);
  console.log("Context username:", username);
  useEffect(() => {
    if (accessToken && username) {
      console.log(`Logged in as: ${username}`);
    }
  }, [accessToken, username]);



  useEffect(() => {
    const loadAsync = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };

    loadAsync();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      {accessToken ? <BottomTab /> : <LoginScreen />}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}