import { useState, useEffect } from "react";
import {
  View, 
  StyleSheet,
  Alert,
  Text,
  FlatList
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
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
    return rndNum
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
  const [guesses, setGuesses] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === answer) {
      onGameOver();
    }
  }, [currentGuess, answer, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, [])

  function nextGuessHandler(direction) {
    // console.log('clicked : ', direction)
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
    setGuesses(previousGuesses => [newRndNum,...previousGuesses]);
  };

  return (
    <View style={styles.screen}>
      <Title >Opponent's Guess</Title>
      <View>
        <NumberContainer>{currentGuess}</NumberContainer>
      </View>
      <Card>
        <InstructionText style={styles.instructionText}>Go higher or lower?</InstructionText>
        <View style={styles.buttonsContain}>
          <View style={styles.buttonContain}>
            <PrimaryButton onSubmit={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContain}>
            <PrimaryButton onSubmit={nextGuessHandler.bind(this, 'higher')}>
              <Ionicons name="md-add" size={24} color="white"/>
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.roundCounter}>
        {/* {guesses.map(guess => <Text key={guess}>{guess}</Text>)} */}
        <FlatList
          data={guesses}
          renderItem={(itemData)=> <Text>{itemData.item}</Text>}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 10,
    padding: 12,
  },

  buttonsContain: {
    flexDirection: 'row',
    margin: 0
  },

  buttonContain: {
    flex: 2
  },

  instructionText: {
    marginBottom: 12
  },

  roundCounter: {
    fontSize: 24,
    color: 'red'
  }
});