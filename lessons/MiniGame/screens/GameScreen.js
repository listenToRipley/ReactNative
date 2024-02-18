import { useState} from "react";
import {
  View, 
  Text,
  Button,
  StyleSheet
} from "react-native";

import Title from "../components/ui/Title";


//number that you should be guessing:
const generateRandomNumber = (min, max, exclude) => {//exclude should be the first number guessed.
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude) {
    return generateRandomNumber(min, max, exclude)
  } else {
    return setCurrentGuess[randomNum];
  }
};

export default function GameScreen({guess}){
  //TODO: guess needs work, since the prop is coming up as empty 
  const initialGuess = generateRandomNumber(1,100,guess);
  [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title >Opponent's Guess</Title>
      <View>
        <Text>Guess: {currentGuess}</Text>
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