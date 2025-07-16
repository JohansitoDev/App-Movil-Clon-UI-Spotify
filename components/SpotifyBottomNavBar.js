import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SpotifyBottomNavBar = ({ selectedIndex, onItemTapped }) => {
  return (
    <View style={bottomNavBarStyles.container}>
      <TouchableOpacity
        style={bottomNavBarStyles.navItem}
        onPress={() => onItemTapped(0)}
      >
        <Text
          style={{
            color: selectedIndex === 0 ? 'white' : 'rgba(255,255,255,0.7)',
            fontSize: 24,
          }}
        >
          {selectedIndex === 0 ? '🏠' : '🏡'}
        </Text>
        <Text
          style={[
            bottomNavBarStyles.navLabel,
            selectedIndex === 0 && bottomNavBarStyles.navLabelSelected,
          ]}
        >
          Inicio
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={bottomNavBarStyles.navItem}
        onPress={() => onItemTapped(1)}
      >
        <Text
          style={{
            color: selectedIndex === 1 ? 'white' : 'rgba(255,255,255,0.7)',
            fontSize: 24,
          }}
        >
          🔍
        </Text>
        <Text
          style={[
            bottomNavBarStyles.navLabel,
            selectedIndex === 1 && bottomNavBarStyles.navLabelSelected,
          ]}
        >
          Buscar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={bottomNavBarStyles.navItem}
        onPress={() => onItemTapped(2)}
      >
        <Text
          style={{
            color: selectedIndex === 2 ? 'white' : 'rgba(255,255,255,0.7)',
            fontSize: 24,
          }}
        >
          {selectedIndex === 2 ? '📚' : '📖'}
        </Text>
        <Text
          style={[
            bottomNavBarStyles.navLabel,
            selectedIndex === 2 && bottomNavBarStyles.navLabelSelected,
          ]}
        >
          Tu biblioteca
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const bottomNavBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#282828',
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderTopColor: '#000',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
  },
  navLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 4,
  },
  navLabelSelected: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SpotifyBottomNavBar;
