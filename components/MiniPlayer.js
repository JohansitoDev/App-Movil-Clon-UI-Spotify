import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const MiniPlayer = () => {
  return (
    <View style={miniPlayerStyles.container}>
      <Image
        source={{ uri: 'https://placehold.co/50x50/1DB954/FFFFFF?text=Song' }}
        style={miniPlayerStyles.image}
        onError={(e) => console.log('Error loading image:', e.nativeEvent.error)}
      />
      <View style={miniPlayerStyles.textContainer}>
        <Text style={miniPlayerStyles.songTitle} numberOfLines={1}>
          Nombre de la Canción
        </Text>
        <Text style={miniPlayerStyles.artistAlbum} numberOfLines={1}>
          Artista - Álbum
        </Text>
      </View>
      <TouchableOpacity style={miniPlayerStyles.iconButton}>
        <Text style={{ color: 'white', fontSize: 24 }}>♡</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={miniPlayerStyles.iconButton}>
        <Text style={{ color: 'white', fontSize: 30 }}>▶️</Text> 
      </TouchableOpacity>
    </View>
  );
};

const miniPlayerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1DB954',
    marginHorizontal: 8,
    borderRadius: 8,
    padding: 8,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  songTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  artistAlbum: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
  },
  iconButton: {
    paddingHorizontal: 8,
  },
});

export default MiniPlayer;
