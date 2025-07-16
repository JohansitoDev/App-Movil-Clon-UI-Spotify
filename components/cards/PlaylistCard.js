import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const PlaylistCard = ({ title, imageUrl, description }) => {
  return (
    <TouchableOpacity style={cardStyles.playlistCard}>
      <Image
        source={{ uri: imageUrl }}
        style={cardStyles.playlistImage}
        onError={(e) => console.log('Error loading image:', e.nativeEvent.error)}
      />
      <View style={cardStyles.playlistTextContainer}>
        <Text style={cardStyles.playlistTitle} numberOfLines={1}>
          {title}
        </Text>
        <Text style={cardStyles.playlistDescription} numberOfLines={2}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const cardStyles = StyleSheet.create({
  playlistCard: {
    backgroundColor: '#121212',
    borderRadius: 8,
    width: (width / 2) - 24,
    overflow: 'hidden',
  },
  playlistImage: {
    height: 120,
    width: '100%',
    backgroundColor: '#222222',
  },
  playlistTextContainer: {
    padding: 8,
  },
  playlistTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  playlistDescription: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
    marginTop: 4,
  },
});

export default PlaylistCard;
