import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import MiniPlayer from './components/MiniPlayer';


const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 15000); // 15 segundos

    return () => clearTimeout(timer);
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleSettingsPress = () => {
    setShowSettings(true);
  };

  const handleCloseSettings = () => {
    setShowSettings(false);
  };

  const renderScreen = () => {
    if (showSplash) {
      return <SplashScreen />;
    }

    if (!isLoggedIn) {
      return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
    }

    if (showSettings) {
      return <SettingsScreen onCloseSettings={handleCloseSettings} />;
    }

    switch (selectedIndex) {
      case 0:
        return <HomeScreen onSettingsPress={handleSettingsPress} />;
      case 1:
        return (
          <View style={appStyles.centerScreen}>
            <Text style={appStyles.centerScreenText}>Buscar</Text>
          </View>
        );
      case 2:
        return (
          <View style={appStyles.centerScreen}>
            <Text style={appStyles.centerScreenText}>Tu biblioteca</Text>
          </View>
        );
      default:
        return (
          <View style={appStyles.centerScreen}>
            <Text style={appStyles.centerScreenText}>Pantalla no encontrada</Text>
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={appStyles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={appStyles.mainContainer}>
        {renderScreen()}
        {isLoggedIn && !showSettings && (
          <>
            <MiniPlayer />
            <SpotifyBottomNavBar
              selectedIndex={selectedIndex}
              onItemTapped={setSelectedIndex}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const appStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  centerScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  centerScreenText: {
    color: 'white',
    fontSize: 24,
  },
});

export default App;
