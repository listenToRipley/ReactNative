import { 
  View, 
  TextInput,
  StyleSheet,
  Alert 
} from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors"
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionsText";

export default function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (inputText) => { //for changes made tyo the number state
    setEnteredNumber(inputText);
  };
  
  const resetInputHandler = () => {
    setEnteredNumber('');
  }
  
  const confirmInputHandler = () => { //check the state of the input value that is pass to the onSubmit in the Confirm button
    //Check if: value is a number, if the value of the number is between 1-99.
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Input', 
        'Number has to be a number between 1 and 99', 
        [{
          text: 'Okay', 
          style:'destructive', 
          onPress: resetInputHandler
        }]); //alert notification
      // console.log('return an error');
      return;
    }
    //If valid, move to the next page, (game screen)
    onPickNumber(chosenNumber);//see details in APP file.
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
      <InstructionText>Enter A Number</InstructionText>
      <TextInput 
        style={styles.numInput} 
        maxLength={2} 
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
        />
        <View style={styles.buttonsContain}>
          <View style={styles.buttonContain}>
            <PrimaryButton
            onSubmit={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContain}>
            <PrimaryButton 
              onSubmit={confirmInputHandler}>
              Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  )
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  },

  numInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  buttonsContain: {
    flexDirection: 'row'
  },

  buttonContain: {
    flex: 1
  }

});