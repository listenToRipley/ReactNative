import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
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
    <Modal
      visible={props.visibility}
      animationType="slide"
    >
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalInputHandle} 
          value={goalText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title='Add Goal' onPress={addGoalHandler} />
            </View>
            <View style={styles.button}>
              <Button title='Done' onPress={props.updateModal}/>
            </View>
          </View>

    </View>
  </Modal>
  )
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10
  }, 
  button: {
    width: '30%',
    marginHorizontal: 8,
  }
});