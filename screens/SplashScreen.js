import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Gear.png')} style={styles.logo} />
      <Button title="Começar" onPress={() => navigation.navigate('Sensores')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logo: { width: 300, height: 300, marginBottom: 20 }
});
