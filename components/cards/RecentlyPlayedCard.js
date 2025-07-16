import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const RecentlyPlayedCard = ({ title, imageUrl }) => {
  return (
    <TouchableOpacity style={cardStyles.recentlyPlayedCard}>
      <Image
        source={{ uri: imageUrl }}
        style={cardStyles.recentlyPlayedImage}
        onError={(e) => console.log('Error loading image:', e.nativeEvent.error)}
      />
      <Text style={cardStyles.recentlyPlayedTitle} numberOfLines={1}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const cardStyles = StyleSheet.create({
  recentlyPlayedCard: {
    width: 150,
    marginRight: 16,
    alignItems: 'flex-start',
  },
  recentlyPlayedImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
    backgroundColor: '#222222',
  },
  recentlyPlayedTitle: {
    color: 'white',
    fontSize: 16,
    marginTop: 8,
  },
});

export default RecentlyPlayedCard;
