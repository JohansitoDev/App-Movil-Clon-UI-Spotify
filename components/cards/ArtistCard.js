import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ArtistCard = ({ name, imageUrl }) => {
  return (
    <TouchableOpacity style={cardStyles.artistCard}>
      <Image
        source={{ uri: imageUrl }}
        style={cardStyles.artistImage}
        onError={(e) => console.log('Error loading image:', e.nativeEvent.error)}
      />
      <Text style={cardStyles.artistName} numberOfLines={1}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const cardStyles = StyleSheet.create({
  artistCard: {
    width: 120,
    marginRight: 16,
    alignItems: 'center',
  },
  artistImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#222222',
  },
  artistName: {
    color: 'white',
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center',
  },
});

export default ArtistCard;
