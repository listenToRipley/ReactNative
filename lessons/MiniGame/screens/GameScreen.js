import { useState, useEffect } from "react";
import {
  View, 
  Text,
  StyleSheet,
  Alert,
} from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

//number that you should be guessing:
const generateRandomNumber = (min, max, exclude) => {//exclude should be the first number guessed.
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  return randomNum === exclude ? generateRandomNumber(min, max, exclude) : randomNum;
};

export default function GameScreen({answer, onGameOver}){
  const initialGuess = generateRandomNumber(1,100,answer);
  const [minBoundary, setMinBoundary] = useState(1); 
  const [maxBoundary, setMaxBoundary] = useState(100); 
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (answer === currentGuess) {
      onGameOver();
    } 
    currentGuess;
  }, [currentGuess, answer, onGameOver])

  //TODO: fix handler, guess isn't changing on click.
  const nextGuessHandler = (direction) => {
    Alert.prompt('press', `you clicks ${direction}`, [{text: 'leave', styles: 'canceled'}])
    if (
      (direction === 'lower' && currentGuess < answer) || 
      (direction === 'higher' && currentGuess  > answer)) {
        Alert.alert("Don't do that!", "It's wrong", [{text: 'Sorry!', style: 'cancel'}])
        return; //exit
    }
    direction === 'lower' ?  
      setMaxBoundary(currentGuess) : 
      setMinBoundary(currentGuess + 1);
    let newNum = generateRandomNumber(minBoundary, maxBoundary, currentGuess); 
    setCurrentGuess(newNum);
  };

  return (
    <View style={styles.screen}>
      <Title >Opponent's Guess</Title>
      <View>
        <NumberContainer number={currentGuess}></NumberContainer>
      </View>
      <View>
        <Text>Go higher or lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
            +
          </PrimaryButton>
        </View>
      </View>
      {/* 
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