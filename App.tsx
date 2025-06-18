import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert, ImageSourcePropType, Pressable, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './BotaoInterativoStyle';

const emotes: ImageSourcePropType[] = [
  require('./assets/amor.avif'),
  require('./assets/chorando.avif'),
  require('./assets/corada.avif'),
  require('./assets/descolada.avif'),
  require('./assets/do.avif'),
  require('./assets/doente.avif'),
  require('./assets/dormindo.avif'),
  require('./assets/empolgada.avif'),
  require('./assets/feliz.avif'),
  require('./assets/fome.avif'),
  require('./assets/mal.avif'),
  require('./assets/medo.avif'),
  require('./assets/morta.avif'),
  require('./assets/normal.avif'),
  require('./assets/paz.avif'),
  require('./assets/pensativa.avif'),
  require('./assets/piscadela.avif'),
  require('./assets/raivosa.avif'),
  require('./assets/rindo.avif'),
  require('./assets/timida.avif'),
  require('./assets/triste.avif'),
  require('./assets/vergonha.avif'),
]

export default function App() {
  const [img, setImg] = useState(emotes);
  const [contador, setContador] = useState(0);

  const [qtd, setQtd] = useState(0);
  const [tempo, setTempo] = useState(0);
  const [media, setMedia] = useState(0);

  let Img = imagens[qtd];

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  function mostrar_imagem() {
    let i = 0;
    for(i = 0; i <= qtd; i++){
      let img = imagens[i];
    }

  }

  function mostrar_imagem() {
    let qtdtemp = qtd + 1
    setQtd(qtdtemp)
  }

function pin() {
    setImg(galinhaVermelha)
    console.log(qtd)
    if(qtd == 0){
        setTempo(0)
    }
}


function pout(){
    setImg(galinha)
}

function plongo(){
    mediaTempo()
    Alert.alert("Média de cliques por segundo", ''+media)
}

useEffect(() => {
    const timer = setInterval(() => {
        setTempo((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [tempo]);

function mediaTempo() {
    console.log(qtd)
    console.log(tempo)
    setMedia(qtd / tempo)
  }

function zerar() {
    setMedia(0)
    setQtd(0)
    setTempo(0)    
}



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
      <Pressable onPress={(aumentar)}
                              onPressIn={pin}
                              onPressOut={pout}
                              onLongPress={plongo}
            >
                <Image style={styles} source={img}></Image>
            </Pressable>
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







const galinha = require('../../../assets/GalinhaNormal.png');
const galinhaVermelha = require('../../../assets/GalinhaApanhando.png');


export function BotaoGalinha() {
    const [qtd, setQtd] = useState(0);
    const [img, setImg] = useState(galinha);
    const [tempo, setTempo] = useState(0);
    const [media, setMedia] = useState(0);


    function aumentar() {
        let qtdtemp = qtd + 1
        setQtd(qtdtemp)
    }
    
    function pin() {
        setImg(galinhaVermelha)
        console.log(qtd)
        if(qtd == 0){
            setTempo(0)
        }
    }
    

    function pout(){
        setImg(galinha)
    }

    function plongo(){
        mediaTempo()
        Alert.alert("Média de cliques por segundo", ''+media)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTempo((prevCount) => prevCount + 1);
        }, 1000);
    
        return () => clearInterval(timer);
      }, [tempo]);

    function mediaTempo() {
        console.log(qtd)
        console.log(tempo)
        setMedia(qtd / tempo)
      }
    
    function zerar() {
        setMedia(0)
        setQtd(0)
        setTempo(0)    
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={(aumentar)}
                              onPressIn={pin}
                              onPressOut={pout}
                              onLongPress={plongo}
            >
                <Image style={styles.galinhaimagem} source={img}></Image>
            </Pressable>
            
            <View style={styles.viewStats}>
                <Text  style={styles.stats}>Total de Cliques: {qtd}</Text>
                <Text  style={styles.stats}>Tempo Total: {tempo}</Text>
                <Text  style={styles.stats}>Velocidade de Cliques: {media}</Text>
            </View>

            <Pressable style={styles.zerar} onPress={(zerar)}>
                <Text style={styles.texxtozerar}>ZERAR</Text>
            </Pressable>
        </View>
    
  );
}