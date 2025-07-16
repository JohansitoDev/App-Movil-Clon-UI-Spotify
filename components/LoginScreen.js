import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert, 
  StatusBar,
} from 'react-native';

const LoginScreen = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    setError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, introduce un correo electrónico válido.');
      return;
    }

    if (password.length !== 6 || !/^\d{6}$/.test(password)) {
      setError('La contraseña debe ser de 6 dígitos numéricos.');
      return;
    }

    
    onLoginSuccess();
  };

  return (
    <SafeAreaView style={loginStyles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={loginStyles.container}>
        <Image
          source={{ uri: 'https://placehold.co/150x150/1DB954/FFFFFF?text=Spotify' }}
          style={loginStyles.logo}
          onError={(e) => console.log('Error loading logo:', e.nativeEvent.error)}
        />
        <Text style={loginStyles.title}>Iniciar Sesión</Text>

        <TextInput
          style={loginStyles.input}
          placeholder="Correo electrónico"
          placeholderTextColor="#A0A0A0"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={loginStyles.input}
          placeholder="Contraseña (6 dígitos)"
          placeholderTextColor="#A0A0A0"
          keyboardType="numeric"
          secureTextEntry
          maxLength={6}
          value={password}
          onChangeText={setPassword}
        />

        {error ? <Text style={loginStyles.errorText}>{error}</Text> : null}

        <TouchableOpacity style={loginStyles.loginButton} onPress={handleLogin}>
          <Text style={loginStyles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={loginStyles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const loginStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
    borderRadius: 75,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    backgroundColor: '#333333',
    color: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#1DB954',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#A0A0A0',
    fontSize: 14,
    marginTop: 10,
  },
  errorText: {
    color: '#FF4500',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default LoginScreen;
