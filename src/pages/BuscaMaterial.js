import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function BuscaMaterial() {
  return (
    <View style={styles.container}>
      <Text>Sistema Patrimonial!</Text>
      <Text>Mobile</Text>
      <Text>Busca</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
