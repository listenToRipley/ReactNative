import { useState, useEffect } from "react";
import {
  View, 
  Text,
  Button,
  StyleSheet,
  Alert
} from "react-native";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameScreen({guess, gameOver}){
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [minBoundary, setMinBoundary] = useState(1); 
  const [maxBoundary, setMaxBoundary] = useState(100); 
  //number that you should be guessing:
  const generateRandomNumber = (min, max, exclude) => {//exclude should be the first number guessed.
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    return randomNum === exclude ? generateRandomNumber(min, max, exclude) : setCurrentGuess[randomNum];
  };

  const initialGuess = generateRandomNumber(minBoundary,maxBoundary,guess);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < guess) || 
      (direction === 'higher' && currentNum  > guess)) {
        Alert.alert("Don't do that!", "It's wrong", [{text: 'Sorry!', style: 'cancel'}])
        return;
    }

    direction === 'lower' ?  setMaxBoundary(currentGuess) : setMinBoundary(currentGuess + 1);
    if (maxBoundary != minBoundary) {
      let newNum = generateRandomNumber(minBoundary, maxBoundary, currentGuess); 
      setCurrentGuess(newNum);
    }
  };

  useEffect(() => {
    if (guess === currentGuess) {
      console.log('RESULT!');
      gameOver(true);
    }
  }, [currentGuess])

  return (
    <View style={styles.screen}>
      <Title >Opponent's Guess</Title>
      <View>
        <NumberContainer number={guess}></NumberContainer>
      </View>
      <View>
        <Text>Hint</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>+</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
        </View>
      </View>
      {/* <View>
        <Text>Higher or Lower</Text>
        <Text>High</Text>
        <Text>Low</Text>
      </View>
      <View>
        <View>LOG ROUNDS</View>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 10,
    padding: 12,
  },
});