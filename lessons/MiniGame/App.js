import { useState } from 'react';
import { 
  StyleSheet, 
  ImageBackground, 
SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors';


export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading/>;
  };

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const countRoundsHandler = () => {
    setGuessRounds(rounds++);
  }

  const gameOverHandler = () => {
    setGameIsOver(true)
  };

  const resetGame = () => {
    setUserNumber(null);
    setGameIsOver(true);
    setGuessRounds(0);
  }

  let screen = userNumber ? 
    <GameScreen answer={userNumber} onGameOver={gameOverHandler} roundsCounter={countRoundsHandler}/> : 
    <StartGameScreen onPickNumber={pickedNumberHandler}/>;
  

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen resetGame={resetGame} rounds={guessRounds} answer={userNumber}/>
  }

  return (
    <LinearGradient colors={[Colors.primary700,Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/diceRoll.jpg')} 
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
