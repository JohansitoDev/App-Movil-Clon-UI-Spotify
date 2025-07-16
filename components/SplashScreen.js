import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={splashStyles.container}>
      <Image
        source={{ uri: 'https://placehold.co/200x200/1DB954/FFFFFF?text=Spotify' }}
        style={splashStyles.logo}
        onError={(e) => console.log('Error loading splash logo:', e.nativeEvent.error)}
      />
    </View>
  );
};

const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});

export default SplashScreen;
