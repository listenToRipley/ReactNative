import { useState } from 'react';
import { 
  StyleSheet, 
  ImageBackground, 
  View,
SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors';


export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = () => {
    setGameIsOver(true)
  };

  let screen = userNumber ? 
    <GameScreen answer={userNumber} onGameOver={gameOverHandler}/> : 
    <StartGameScreen onPickNumber={pickedNumberHandler}/>;
  

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen></GameOverScreen>
  }

  return (
    <LinearGradient colors={[Colors.primary700,Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./images/diceRoll.jpg')} 
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
        style={styles.rootScreen}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    width: '100%',
  },
  backgroundImage: {
    opacity: 0.15
  }
});
