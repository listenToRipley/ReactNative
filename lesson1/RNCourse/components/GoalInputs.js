import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [goalText, setGoalText] = useState('');

  function goalInputHandle(goalText) {
    // console.log(goalText);
    setGoalText(goalText);
  };

  function addGoalHandler() {
    props.onAddGoal(goalText); //pass the state back to the main prop
    setGoalText(''); //reset on add.
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.textInput}
        placeholder='Your course goal!'
        onChangeText={goalInputHandle} 
        value={goalText}
        />
      <Button title='Add Goal' onPress={addGoalHandler} />
  </View>
  )
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});