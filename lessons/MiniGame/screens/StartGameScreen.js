import { 
  View, 
  TextInput,
  StyleSheet,
  Alert 
} from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";


export default function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (inputText) => { //for changes made tyo the number state
    setEnteredNumber(inputText);
  };
  
  const resetInputHandler = () => {
    setEnteredNumber('');
  }
  
  const confirmInputHandler = (inputText) => { //check the state of the input value that is pass to the onSubmit in the Confirm button
    //Check if: value is a number, if the value of the number is between 1-99.
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber > 99 || chosenNumber <= 0) {
      Alert.alert(
        'Invalid Input', 
        'Number has to be a number between 1 and 99', 
        [{
          text: 'Okay', 
          style:'destructive', 
          onPress: resetInputHandler
        }]); //alert notification
      console.log('return an error');
      return;
    }
    //If valid, move to the next page, (game screen?)
  
  }

  return (
    <View style={styles.inputContainer}>

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
          onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContain}>
          <PrimaryButton 
            onSubmit={confirmInputHandler}>
            Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({

  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding:16,
    backgroundColor: "#4e0329",
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 2},
  },

  numInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
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