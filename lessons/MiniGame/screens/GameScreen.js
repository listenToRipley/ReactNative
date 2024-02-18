import { useState, useEffect } from "react";
import {
  View, 
  Text,
  Button,
  StyleSheet
} from "react-native";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";

export default function GameScreen({guess}){
  [currentGuess, setCurrentGuess] = useState(initialGuess);
  [hint, setHint] = useState(null);


  //number that you should be guessing:
  const generateRandomNumber = (min, max, exclude) => {//exclude should be the first number guessed.
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    return randomNum === exclude ? generateRandomNumber(min, max, exclude) : setCurrentGuess[randomNum];
  };
  
  const initialGuess = generateRandomNumber(1,100,guess);

  useEffect(() => {
    currentGuess > guess? setHint('high') : setHint('low')
  }, [currentGuess])

  return (
    <View style={styles.screen}>
      <Title >Opponent's Guess</Title>
      <View>
        <NumberContainer number={guess}></NumberContainer>
      </View>
      <View>
        <Text>Hint: {hint}</Text>
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