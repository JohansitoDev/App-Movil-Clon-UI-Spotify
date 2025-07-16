import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';

import RecentlyPlayedCard from './cards/RecentlyPlayedCard';
import PlaylistCard from './cards/PlaylistCard';
import ArtistCard from './cards/ArtistCard';

const { width } = Dimensions.get('window');

const HomeScreen = ({ onSettingsPress }) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return 'Buenos días';
    } else if (hour < 18) {
      return 'Buenas tardes';
    } else {
      return 'Buenas noches';
    }
  };

  return (
    <ScrollView style={homeScreenStyles.container}>
      <View style={homeScreenStyles.header}>
        <Text style={homeScreenStyles.greetingText}>{getGreeting()}</Text>
        <View style={homeScreenStyles.headerIcons}>
          <TouchableOpacity style={homeScreenStyles.iconButton}>
            <Text style={{ color: 'white', fontSize: 24 }}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={homeScreenStyles.iconButton}>
            <Text style={{ color: 'white', fontSize: 24 }}>🕒</Text>
          </TouchableOpacity>
          <TouchableOpacity style={homeScreenStyles.iconButton} onPress={onSettingsPress}>
            <Text style={{ color: 'white', fontSize: 24 }}>⚙️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={homeScreenStyles.section}>
        <Text style={homeScreenStyles.sectionTitle}>Reproducido recientemente</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={homeScreenStyles.carousel}>
          {[...Array(6)].map((_, index) => (
            <RecentlyPlayedCard
              key={index}
              title={`Canción ${index + 1}`}
              imageUrl={`https://placehold.co/150x150/222222/FFFFFF?text=Album${index + 1}`}
            />
          ))}
        </ScrollView>
      </View>

      <View style={homeScreenStyles.section}>
        <Text style={homeScreenStyles.sectionTitle}>Tus listas de reproducción</Text>
        <View style={homeScreenStyles.gridContainer}>
          {[...Array(8)].map((_, index) => (
            <PlaylistCard
              key={index}
              title={`Mi Lista ${index + 1}`}
              imageUrl={`https://placehold.co/200x200/222222/FFFFFF?text=Playlist${index + 1}`}
              description={`Descripción de la lista ${index + 1}.`}
            />
          ))}
        </View>
      </View>

      <View style={homeScreenStyles.section}>
        <Text style={homeScreenStyles.sectionTitle}>Artistas que te podrían gustar</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={homeScreenStyles.carousel}>
          {[...Array(6)].map((_, index) => (
            <ArtistCard
              key={index}
              name={`Artista ${index + 1}`}
              imageUrl={`https://placehold.co/150x150/222222/FFFFFF?text=Artista${index + 1}`}
            />
          ))}
        </ScrollView>
      </View>
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: StatusBar.currentHeight || 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'black',
  },
  greetingText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 16,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  carousel: {
    flexDirection: 'row',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 0,
  },
});

export default HomeScreen;
