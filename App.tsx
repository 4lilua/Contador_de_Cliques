import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  // Efeito para detectar quando contador chega a zero
  useEffect(() => {
    if (contador === 0) {
      Alert.alert("Atenção!", "O contador chegou a zero.");
    }
  }, [contador]); // Só executa quando o valor de contador mudar

  return (

    <LinearGradient
      colors={['#ed91e4', '#ed91e4', '#fac5f5', '#fce6fa', '#fac5f5', '#ed91e4', '#ed91e4']}
      style={{ flex: 1 }}
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 1}}

    >
      <View style={styles.container}>
        <Text style={styles.texto}>Contador: {contador}</Text>
        <View style={styles.botoes}>
          <Button title="Incrementar" onPress={incrementar} />
          <View style={{ width: 20 }} />
          <Button title="Decrementar" onPress={decrementar} />
        </View>
      </View>
    </LinearGradient >


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 24,
    marginBottom: 20,
  },
  botoes: {
    flexDirection: 'row',
  },
});
