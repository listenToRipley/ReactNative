import { useState, useEffect } from "react";
import {
  View, 
  StyleSheet,
  Alert,
} from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionsText";

//number that you should be guessing:
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ answer, onGameOver }) {
  const initialGuess = generateRandomBetween(
    1,
    100,
    answer
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === answer) {
      onGameOver();
    }
  }, [currentGuess, answer, onGameOver]);

  function nextGuessHandler(direction) {
    console.log('clicked : ', direction)
    if (
      (direction === 'lower' && currentGuess < answer) ||
      (direction === 'higher' && currentGuess > answer)
    ) {
      Alert.alert("Wrong way!", 'Change direction', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    };

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    };

    const newRndNum = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNum);
  };

  return (
    <View style={styles.screen}>
      <Title >Opponent's Guess</Title>
      <View>
        <NumberContainer>{currentGuess}</NumberContainer>
      </View>
      <Card>
        <InstructionText>Go higher or lower?</InstructionText>
        <View>
          <PrimaryButton onSubmit={nextGuessHandler.bind(this, 'lower')}>
            -
          </PrimaryButton>
          <PrimaryButton onSubmit={nextGuessHandler.bind(this, 'higher')}>
            +
          </PrimaryButton>
        </View>
      </Card>
      {/* <View>LOG ROUNDS</View>*/}
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