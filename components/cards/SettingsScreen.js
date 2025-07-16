import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

const SettingsScreen = ({ onCloseSettings }) => {
  const handleChangeMusicOrder = () => {
    Alert.alert('Configuración', 'Orden de la música cambiado (simulado).');
  };

  const handleChangePlaylistOrder = () => {
    Alert.alert('Configuración', 'Orden de las listas de reproducción cambiado (simulado).');
  };

  const handleChangeAppBackground = () => {
    Alert.alert('Configuración', 'Fondo de la aplicación cambiado (simulado).');
  };

  return (
    <SafeAreaView style={settingsStyles.safeArea}>
      <ScrollView style={settingsStyles.container}>
        <View style={settingsStyles.header}>
          <TouchableOpacity onPress={onCloseSettings} style={settingsStyles.backButton}>
            <Text style={settingsStyles.backButtonText}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={settingsStyles.headerTitle}>Configuración</Text>
        </View>

        <TouchableOpacity style={settingsStyles.optionButton} onPress={handleChangeMusicOrder}>
          <Text style={settingsStyles.optionButtonText}>Cambiar orden de la música</Text>
        </TouchableOpacity>

        <TouchableOpacity style={settingsStyles.optionButton} onPress={handleChangePlaylistOrder}>
          <Text style={settingsStyles.optionButtonText}>Cambiar orden de las listas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={settingsStyles.optionButton} onPress={handleChangeAppBackground}>
          <Text style={settingsStyles.optionButtonText}>Cambiar fondo de la app</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

const settingsStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  optionButton: {
    backgroundColor: '#121212',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  optionButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
